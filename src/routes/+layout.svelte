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

	const toTitleCase = (str: any) => {
		return str
			.toLowerCase()
			.split(" ")
			.map((word: any) => {
				return (
					word.charAt(0).toUpperCase() +
					word.slice(1)
				);
			})
			.join(" ");
	};

	const page2Href = () => {
		if (typeof window !== "undefined") {
			let title = window.location.pathname;
			let title_sec = title.split("/");
			title = title_sec[title_sec.length - 1];

			title = toTitleCase(title.replaceAll("-", " "));

			return title;
		}
	};
</script>

<main>
	<NavBar page={page2Href()} {pages} />
</main>

{@render children()}
