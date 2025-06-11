<script lang="ts">
	let { items, style } = $props();
	let isDropdownOpen = $state(false);
	let dropped = $state(false);

	const sleep = (ms: number) => {
		return new Promise((res) => setTimeout(res, ms));
	};

	const handleDropdownClick = async () => {
		isDropdownOpen = !isDropdownOpen;
		await sleep(100);
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
</script>

<div class="flex justify-between items-center {style}">
	<div class="dropdown" onfocusout={handleDropdownFocusLoss}>
		<button
			class="dropdown button {isDropdownOpen ? 'active' : ''}"
			onclick={handleDropdownClick}>></button
		>
		<ul
			class="dropdown menu"
			style:visibility={dropped ? "visible" : "hidden"}
		>
			{#each items as item}
				<li class="dropdown item">
					<button>{item}</button>
				</li>
			{/each}
		</ul>
	</div>
</div>
