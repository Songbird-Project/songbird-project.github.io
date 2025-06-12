<script lang="ts">
	import NavBar from "./lib/NavBar.svelte";

	let pages = [
		"Home",
		"Operating System",
		"Package Manager",
		"Desktop Environment",
		"Window Manager",
	];
</script>

<main>
	<NavBar page="Home" {pages} />
</main>
