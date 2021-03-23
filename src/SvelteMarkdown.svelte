<script>
  import Parser from './Parser.svelte'
  import { Lexer, defaultOptions, defaultRenderers } from './markdown-parser'

  export let source = ''
  export let renderers = {}
  export let options = {}
  const lexer = new Lexer({ ...defaultOptions, ...options })
  const tokens = lexer.lex(source)
  const combinedRenderers = { ...defaultRenderers, ...renderers }
</script>

<Parser {tokens} renderers={combinedRenderers} />
