<script lang="ts">
	import NavBar from "../lib/NavBar.svelte";
	import "../app.css";
	import type { LayoutProps } from "./$types";

	let { children }: LayoutProps = $props();

	let pages = [
		"Home",
		"Operating System",
		"Package Manager",
		"Desktop Environment",
		"Window Manager",
	];

	let page = $state(pages[0]);
</script>

<main>
	<NavBar {page} {pages} />
</main>

{@render children()}
