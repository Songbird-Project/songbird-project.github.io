<script lang="ts">
	import Dropdown from "./Dropdown.svelte";
</script>

<nav class="flex justify-between">
	<div></div>
	<Dropdown
		items={[
			"Operating System",
			"Package Manger",
			"Desktop Environment",
			"Window Manager",
		]}
		style=""
	/>
</nav>
