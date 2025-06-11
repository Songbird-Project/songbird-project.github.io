<script lang="ts">
	let { items, page } = $props();
	let isDropdownOpen = $state(false);
	let dropped = $state(false);

	const sleep = (ms: number) => {
		return new Promise((res) => setTimeout(res, ms));
	};

	const handleDropdownClick = async () => {
		isDropdownOpen = !isDropdownOpen;
		dropped = !dropped;
	};

	const handleDropdownFocusLoss = ({ relatedTarget, currentTarget }) => {
		if (
			relatedTarget instanceof HTMLElement &&
			currentTarget.contains(relatedTarget)
		)
			return;
		isDropdownOpen = false;
		dropped = false;
	};

	const name2Href = (name: string) => {
		name = name.toLowerCase();

		name = "../projects/" + name.replace(" ", "-") + ".svelte";

		return name;
	};
</script>

<div
	class="dropdown flex justify-between items-center relative fixed top-0 left-0 right-0"
>
	<img src="/SongbirdOS.svg" alt="" />
	<p>Songbird</p>
	<div class="dropdown" onfocusout={handleDropdownFocusLoss}>
		<button
			class="dropdown button underline decoration-3 {isDropdownOpen
				? 'active'
				: ''}"
			onclick={handleDropdownClick}>{page}</button
		>
		<ul
			class="absolute dropdown menu w-max {isDropdownOpen
				? 'active'
				: ''}"
			style:display={dropped ? "block" : "none"}
		>
			{#each items as item}
				<li class="dropdown item relative w-full">
					<a
						class="text-left w-full"
						href={name2Href(item)}>{item}</a
					>
				</li>
			{/each}
		</ul>
	</div>
</div>
