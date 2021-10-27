<script>
  import { setContext } from 'svelte'
  import Parser from './Parser.svelte'
  import { Lexer, Slugger, defaultOptions, defaultRenderers, key } from './markdown-parser'

  export let source = ''
  export let renderers = {}
  export let options = {}
  export let isInline = false

  let lexer;
  let tokens;
  $: slugger = source ? new Slugger : undefined
  $: combinedOptions = { ...defaultOptions, ...options }
  $: {
    lexer = new Lexer(combinedOptions)
    
    tokens = isInline?lexer.inlineTokens(source):lexer.lex(source)
  }
  $: combinedRenderers = { ...defaultRenderers, ...renderers }

  setContext(key, {
    slug: (val) => slugger ? slugger.slug(val) : ''
  })
</script>

<Parser {tokens} renderers={combinedRenderers} />
