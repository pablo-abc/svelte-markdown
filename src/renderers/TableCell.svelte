<script>
  export let header;
  export let align;
</script>

{#if header}
  <th><slot></slot></th>
{:else}
  <td><slot></slot></td>
{/if}
