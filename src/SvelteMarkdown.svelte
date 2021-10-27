<script>
  import Parser from './Parser.svelte'
  import { Lexer, Slugger, defaultOptions, defaultRenderers } from './markdown-parser'

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
</script>

<Parser
  {tokens}
  renderers={combinedRenderers}
  options={combinedOptions}
/>
