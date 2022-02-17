<script>
	export let item;
</script>

<svelte:head>
	<title>Page {item.MID}</title>
</svelte:head>

<pre>{JSON.stringify(item, null, 2)}
</pre>
