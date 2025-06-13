<script lang="ts">
	import Dropdown from "./Dropdown.svelte";

	let { page, pages } = $props();

	const getPlace = () => {
		if (typeof window !== "undefined") {
			return localStorage.getItem("title") || "Home";
		}

		return "Home";
	};
</script>

<nav class="flex justify-between navbar overflow-visible">
	<Dropdown items={pages} page={getPlace()} />
</nav>
