<script>
  import Parser from './Parser.svelte'
  import { Lexer, Slugger, defaultOptions, defaultRenderers } from './markdown-parser'

  export let source = ''
  export let renderers = {}
  export let options = {}
  export let isInline = false;

  const slugger = new Slugger();

  let lexer;
  let tokens;
  $: combinedOptions = { ...defaultOptions, ...options }
  $: {
    lexer = new Lexer(combinedOptions)
    
    tokens = isInline?lexer.inlineTokens(source):lexer.lex(source)
  }
  $: combinedRenderers = { ...defaultRenderers, ...renderers }
</script>

<Parser
  {tokens}
  {slugger}
  renderers={combinedRenderers}
  options={combinedOptions}
/>
