<script lang="ts">
	import { page } from '$app/stores';
	const segmentsStr: string = $page.params.slug;
	const segments = segmentsStr.split('/');
</script>

<h1>Docs Homepage</h1>

<span>This page catches all routes like</span>
<ul>
	<li>/docs/abc1/kjsadnc</li>
	<li>/docs/abc2/def3/ghi</li>
</ul>

{#if segments.length === 1}
	Viewing Feature {segments[0]}
{:else}
	Viewing Concept {segments[1]}
{/if}
