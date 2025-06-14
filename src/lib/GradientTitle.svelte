<script lang="ts">
	import type { LayoutProps } from "../routes/$types";
	import GradientText from "./GradientText.svelte";

	let {
		style,
		text,
		children,
	}: { style: string; text: string; children: LayoutProps } = $props();
</script>

<GradientText style={"font-bold " + style}>{@render children()}</GradientText>
