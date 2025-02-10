<script>
  /**
   * @typedef {Object} Props
   * @property {string} [href]
   * @property {any} [title]
   * @property {import('svelte').Snippet} [children]
   */

  /** @type {Props} */
  let { href = '', title = undefined, children } = $props();
</script>

<a {href} {title}>{@render children?.()}</a>
