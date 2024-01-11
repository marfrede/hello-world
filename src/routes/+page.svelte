<script lang="ts">
	import { goto } from '$app/navigation';
	function goToBlog() {
		goto('/blog', { replaceState: true });
	}
</script>

<h1>Hello World</h1>

<a href="/blog">To the blog</a>
<div>
	<button on:click={goToBlog}>To The blog per button!</button>
</div>
