<script lang="ts">
	import { page } from '$app/stores';

	const greetings = {
		en: 'hello',
		de: 'hallo',
		es: 'hóla'
	};

	const lang: string = $page.params.lang ?? 'en';
	const greeting: string | undefined = greetings[lang as 'en' | 'de' | 'es'];
</script>

<h1>{greeting}</h1>
