<script>
  import Parser from './Parser.svelte'
  import { createEventDispatcher, onMount } from 'svelte'
  import { Lexer, defaultOptions, defaultRenderers } from './markdown-parser'

  export let source = ''
  export let renderers = {}
  export let options = {}
  export let isInline = false;

  const dispatch = createEventDispatcher();

  let tokens;
  let lexer;
  let mounted;

  $: {
    lexer = new Lexer({ ...defaultOptions, ...options })

    tokens = isInline ? lexer.inlineTokens(source) : lexer.lex(source)
  }

  $: combinedRenderers = { ...defaultRenderers, ...renderers }

  $: mounted && dispatch('parsed', { tokens })

  onMount(() => {
    mounted = true
  });
</script>

<Parser {tokens} renderers={combinedRenderers} />
