<script>
  import Parser from './Parser.svelte'
  import { createEventDispatcher } from 'svelte'
  import { Lexer, defaultOptions, defaultRenderers } from './markdown-parser'

  export let source = ''
  export let renderers = {}
  export let options = {}
  export let isInline = false;

  const dispatch = createEventDispatcher();

  let tokens;
  let lexer;

  $: {
    lexer = new Lexer({ ...defaultOptions, ...options })

    tokens = isInline ? lexer.inlineTokens(source) : lexer.lex(source)
    
    dispatch('parsed', {tokens});
  }

  $: combinedRenderers = { ...defaultRenderers, ...renderers }
</script>

<Parser {tokens} renderers={combinedRenderers} />
