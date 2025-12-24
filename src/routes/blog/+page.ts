function stripMarkdown(md: string) {
  return md
    .replace(/^#+\s+/gm, '')                  // headings
    .replace(/(\*\*|__)(.*?)\1/g, '$2')       // bold/italic
    .replace(/(\*|_)(.*?)\1/g, '$2')
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')  // links
    .replace(/!\[([^\]]*)\]\([^)]+\)/g, '')   // images
    .replace(/`([^`]+)`/g, '$1')              // inline code (FIXED)
    .replace(/^>\s+/gm, '')                   // blockquotes
    .replace(/^[\*\-\+]\s+/gm, '')           // list symbols
    .trim();
}

export const load = async () => {
  const metaModules = import.meta.glob('./**/+page.md', { eager: true });
  const rawModules = import.meta.glob('./**/+page.md', { eager: true, query: '?raw', import: 'default' });

  const posts = Object.entries(metaModules)
    .filter(([path]) => !path.includes('/draft/'))
    .map(([path, mod]: [string, any]) => {
      const metadata = mod.metadata || {};
      const slug = path.replace('./', '').replace('/+page.md', '');

      const rawContent = (rawModules[path] as string) || '';

      const snippet = stripMarkdown(rawContent)
        .split('\n')
        .filter(line => line.trim() !== '')
        .slice(6, 8)
        .join(' ')
        .trim();

      return {
        slug,
        snippet,
        ...metadata
      };
    });

  posts.sort((a, b) => {
    if (!a.date || !b.date) return 0;
    const [aD, aM, aY] = a.date.split('/');
    const [bD, bM, bY] = b.date.split('/');
    return new Date(`${bY}-${bM}-${bD}`).getTime() - new Date(`${aY}-${aM}-${aD}`).getTime();
  });

  return {
    posts
  };
};
