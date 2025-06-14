<script lang="ts">
	import type { LayoutProps } from "../routes/$types";

	let { style, children }: { style: string; children: LayoutProps } =
		$props();
</script>

<p class="gradient-pink {style}">{@render children()}</p>
