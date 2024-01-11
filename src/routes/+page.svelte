<script lang="ts">
	import { goto, beforeNavigate, afterNavigate } from '$app/navigation';
	function goToBlog() {
		goto('/blog', { replaceState: true });
	}

	beforeNavigate((nav) => console.log('beforeNav', nav));
	afterNavigate((nav) => console.log('afterNav', nav));
</script>

<h1>Hello World</h1>

<a href="/blog">To the blog</a>
<div>
	<button on:click={goToBlog}>To The blog per button!</button>
</div>
