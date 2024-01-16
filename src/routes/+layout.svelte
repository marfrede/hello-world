<script>
	import Footer from '$lib/header-footer/footer.svelte';
	import Header from '$lib/header-footer/header.svelte';
</script>

<Header />
<div class="main-content">
	<slot />
</div>
<Footer />

<style lang="scss">
	.main-content {
		margin: 16px 16px;
		font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial,
			sans-serif;
	}
</style>
