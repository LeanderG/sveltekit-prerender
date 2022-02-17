<script context="module">
	export const hydrate = false;
</script>

<script>
	export let museums;
	export let page;
</script>

<svelte:head>
	<title>Page {page}</title>
</svelte:head>

{#each museums as museum}
	<div>
		<a href={'/museum/' + museum.MID}>
			{museum.MID}
		</a>
	</div>
{/each}
