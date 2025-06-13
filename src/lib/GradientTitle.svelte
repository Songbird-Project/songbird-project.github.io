<script lang="ts">
	import GradientText from "./GradientText.svelte";

	let { style, text } = $props();
</script>

<GradientText {text} style={"font-bold " + style} />
