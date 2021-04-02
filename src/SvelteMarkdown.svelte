<script>
  import Parser from './Parser.svelte'
  import { Lexer, defaultOptions, defaultRenderers } from './markdown-parser'

  export let source = ''
  export let renderers = {}
  export let options = {}
  let lexer;
  let tokens;
  $: {
    lexer = new Lexer({ ...defaultOptions, ...options })
    tokens = lexer.lex(source)
  }
  $: combinedRenderers = { ...defaultRenderers, ...renderers }
</script>

<Parser {tokens} renderers={combinedRenderers} />
