function stripMarkdown(md: string) {
  return md
    // Remove headings
    .replace(/^#+\s+/gm, '')
    // Remove bold/italic
    .replace(/(\*\*|__)(.*?)\1/g, '$2')
    .replace(/(\*|_)(.*?)\1/g, '$2')
    // Remove links but keep text
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
    // Remove images
    .replace(/!\[([^\]]*)\]\([^)]+\)/g, '')
    // Remove inline code
    .replace(/`([^`]+)`/g, '$1')
    // Remove blockquotes
    .replace(/^>\s+/gm, '')
    // Remove remaining markdown symbols like - or *
    .replace(/^[\*\-\+]\s+/gm, '')
    // Trim whitespace
    .trim();
}

export const load = async () => {
  const modules = import.meta.glob('./**/+page.md', { eager: true });

  const entries = await Promise.all(
    Object.entries(modules)
      .filter(([path]) => !path.includes('/draft/'))
      .map(async ([path, mod]: any) => {
        const metadata = mod.metadata;

        const raw = (await import(`${path}?raw`)).default as string;

        const snippet = stripMarkdown(raw)
          .split('\n')
          .filter(line => line.trim() !== '')
          .slice(6, 8)
          .join(' ')
          .trim();

        return {
          slug: path.replace('./', '').replace('/+page.md', ''),
          ...metadata,
          snippet
        };
      })
  );

  entries.sort((a, b) => {
    const [aD, aM, aY] = a.date.split('/');
    const [bD, bM, bY] = b.date.split('/');
    return new Date(`${bY}-${bM}-${bD}`).getTime() - new Date(`${aY}-${aM}-${aD}`).getTime();
  });

  return { posts: entries };
};
