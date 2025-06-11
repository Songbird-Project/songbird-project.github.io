<script lang="ts">
	import Dropdown from "./Dropdown.svelte";

	let { page } = $props();
</script>

<nav class="flex justify-between navbar overflow-visible">
	<Dropdown
		items={[
			"Home",
			"Operating System",
			"Package Manger",
			"Desktop Environment",
			"Window Manager",
		]}
		{page}
	/>
</nav>
