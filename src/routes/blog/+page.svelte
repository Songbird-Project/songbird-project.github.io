<script lang="ts">
  export let data;

  const date = (date: string) => {
    const [d, m, y] = date.split("/");
    return `${y}-${m}-${d}`;
  };
</script>

<div class="flex flex-col w-[90%] mx-auto gap-5 mb-10">
  The Songbird Project Blog is where our team share their thoughts and
  experiences of current technologies and software along with project updates
  and announcments.
  {#each data.posts as post}
    <a href={`/blog/${post.slug}`}>
      <div role="alert" class="alert bg-base-100 flex flex-col items-start">
        <div class="text-lg">
          <time class="font-semibold" datetime={date(post.date)}
            >{post.date}</time
          >
          {post.title}
        </div>
        <span>{post.snippet}</span>
      </div>
    </a>
  {/each}
</div>
