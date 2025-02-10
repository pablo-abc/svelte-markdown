<script>
  import { setContext } from 'svelte'
  import { marked } from 'marked'
  import Slugger from 'github-slugger'

  import Parser from './Parser.svelte'
  import { defaultOptions, defaultRenderers } from './markdown-parser'
  import { key } from './context'

  let {
    source = [],
    renderers = {},
    options = {},
    isInline = false
  } = $props()

  let tokens = $state()

  let preprocessed = $derived(Array.isArray(source))
  let slugger = $derived(source ? new Slugger : undefined)
  let combinedOptions = $derived({ ...defaultOptions, ...options })
  let combinedRenderers = $derived({ ...defaultRenderers, ...renderers })

  $effect(() => {
    if (preprocessed) {
      tokens = source
    } else {
      const lexer = new marked.Lexer(combinedOptions)
      tokens = isInline ? lexer.inlineTokens(source) : lexer.lex(source)
    }
  })

  setContext(key, {
    slug: (val) => slugger ? slugger.slug(val) : '',
    getOptions: () => combinedOptions
  })

</script>

<Parser {tokens} renderers={combinedRenderers} />
