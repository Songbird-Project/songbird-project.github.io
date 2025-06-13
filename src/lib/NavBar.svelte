<script lang="ts">
	import Dropdown from "./Dropdown.svelte";

	let { page, pages } = $props();
</script>

<nav class="flex justify-between navbar overflow-visible">
	<Dropdown items={pages} {page} />
</nav>
