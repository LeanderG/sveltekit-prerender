<script>
	import { maxPages } from '$lib/constants';
	let pages = Array.from({ length: maxPages }, (_, i) => i + 1);
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

{#each pages as page}
	<a href={'/page/' + page}>Page {page}</a>
{/each}
