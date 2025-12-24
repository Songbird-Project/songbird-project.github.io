<script context="module">
  import H2 from "$lib/blog/h2.svelte";
  import Blockquote from "$lib/blog/blockquote.svelte";
  import Info from "$lib/blog/info.svelte";
  export { H2 as h2, Blockquote as blockquote };
</script>

<script lang="ts">
  export let title;
  export let author;
  export let date;
  export let tags;
</script>

<div class="flex-col-reverse sm:flex-row flex justify-center gap-10 mb-10">
  <div class="text-neutral-content w-[65%]">
    <slot />
  </div>

  <div
    role="alert"
    class="flex flex-col h-fit alert bg-base-100 text-neutral-content w-[20%]"
  >
    <Info label="Article" value={title} />
    <Info label="Author" value={author} />
    <Info label="Date" value={date} />
    <div class="flex w-full justify-between">
      <span class="font-black">Tags:</span>
      <div class="flex flex-wrap gap-2 justify-end">
        {#each tags as tag}
          <div class="badge badge-soft badge-primary">{tag}</div>
        {/each}
      </div>
    </div>
  </div>
</div>
