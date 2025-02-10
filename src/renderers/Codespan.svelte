<script>
  let { raw } = $props();
</script>

<code>{raw.replace(/`/g, '')}</code>
