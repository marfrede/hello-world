<script lang="ts">
	export let blogIds = [1, 2, 3, 4];
</script>

<h1>My blog</h1>

<a href="..">Go Back</a><br /><br />

{#each blogIds as blogId}
	<div><a href="/blog/{blogId}">Blog {blogId}</a></div>
{/each}
