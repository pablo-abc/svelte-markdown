<script>
  let { ordered, start, children } = $props();
</script>

{#if ordered}
  <ol {start}>{@render children?.()}</ol>
{:else}
  <ul>{@render children?.()}</ul>
{/if}
