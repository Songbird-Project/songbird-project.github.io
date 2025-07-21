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

	const string2Href = (name: string) => {
		if (name! in items) {
			name = "/not-found";
		} else if (name == "Home") {
			name = "/";
		} else {
			name = "/" + name.toLowerCase().replaceAll(" ", "-");
		}

		return name;
	};
</script>

<div
	class="dropdown flex justify-between items-center relative fixed top-0 left-0 right-0 pl-5 space-x-4"
>
	<img src="/favicon.svg" alt="" />
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
						href={string2Href(item)}
						class="w-full"
					>
						<button
							class="text-left w-full"
							onclick={() => {
								page = item;
								// storePlace(
								// page,
								// );
							}}
						>
							{item}
						</button></a
					>
				</li>
			{/each}
		</ul>
	</div>
</div>
