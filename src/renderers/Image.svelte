<script>
  /**
   * @typedef {Object} Props
   * @property {string} [href]
   * @property {any} [title]
   * @property {string} [text]
   */

  /** @type {Props} */
  let { href = '', title = undefined, text = '' } = $props();
</script>

<img src={href} {title} alt={text}>
