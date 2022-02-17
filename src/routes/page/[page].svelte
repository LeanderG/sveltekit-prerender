<script>
	export let museums;
	export let page;
</script>

<svelte:head>
	<title>Page {page}</title>
</svelte:head>

{#each museums as museum}
	<a href={'/museum/' + museum.MID}>
		{museum.MID}
	</a>
{/each}
