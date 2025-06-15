<script lang="ts">
	import Dropdown from "./Dropdown.svelte";
	import Icon from "./Icon.svelte";

	let { page, pages } = $props();
</script>

<nav class="flex justify-between navbar overflow-visible">
	<Dropdown items={pages} {page} />

	<div class="flex right items-center justify-between w-[15%]">
		<button
			class="nav-button"
			onclick={() =>
				(location.href =
					"https://github.com/Songbird-Project/")}
			aria-label="GitHub"
		>
			<Icon slug="github" alt="GH" />
		</button>
		<button
			class="nav-button"
			onclick={() =>
				(location.href =
					"https://www.youtube.com/playlist?list=PLV015_dxFGdv20UxxPQOmTPArl0A3SXVs")}
			aria-label="YouTube"
		>
			<Icon slug="youtube" alt="YT" />
		</button>
		<button
			class="nav-button"
			onclick={() => (location.href = "/about")}>About</button
		>
	</div>
</nav>
