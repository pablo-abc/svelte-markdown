<script>
  let { header, align, children } = $props();
</script>

{#if header}
  <th {align}>{@render children?.()}</th>
{:else}
  <td {align}>{@render children?.()}</td>
{/if}
