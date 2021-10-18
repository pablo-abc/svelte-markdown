<script>
  export let depth
  export let raw
  export let options
  export let slugger

  $: id = options.headerIds
    ? options.headerPrefix + slugger.slug(raw.replace(/^#+/, ''))
    : undefined
</script>

{#if depth === 1}
  <h1 {id}><slot></slot></h1>
{:else if depth === 2}
  <h2 {id}><slot></slot></h2>
{:else if depth === 3}
  <h3 {id}><slot></slot></h3>
{:else if depth === 4}
  <h4 {id}><slot></slot></h4>
{:else if depth === 5}
  <h5 {id}><slot></slot></h5>
{:else if depth === 6}
  <h6 {id}><slot></slot></h6>
{:else}
  {raw}
{/if}
