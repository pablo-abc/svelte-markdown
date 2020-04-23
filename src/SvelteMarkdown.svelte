<script context="module">
  import marked from 'marked'
  import Parser from './Parser.svelte'
  import {
    Heading,
    Paragraph,
    Text,
    Image,
    Link,
    Em,
    Strong,
    Codespan,
    Del,
    Table,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
    List,
    ListItem,
    Hr,
    Html,
    Blockquote,
    Code,
  } from './renderers'
  const defaultRenderers = {
    heading: Heading,
    paragraph: Paragraph,
    text: Text,
    image: Image,
    link: Link,
    em: Em,
    strong: Strong,
    codespan: Codespan,
    del: Del,
    table: Table,
    tablehead: TableHead,
    tablebody: TableBody,
    tablerow: TableRow,
    tablecell: TableCell,
    list: List,
    listitem: ListItem,
    hr: Hr,
    html: Html,
    blockquote: Blockquote,
    code: Code,
  }
  const defaultOptions = {
    baseUrl: null,
    breaks: false,
    gfm: true,
    headerIds: true,
    headerPrefix: '',
    highlight: null,
    langPrefix: 'language-',
    mangle: true,
    pedantic: false,
    renderer: null,
    sanitize: false,
    sanitizer: null,
    silent: false,
    smartLists: false,
    smartypants: false,
    tokenizer: null,
    xhtml: false,
  }
</script>

<script>
  export let source = ''
  export let renderers = {}
  export let options = {}
  const lexer = new marked.Lexer({ ...defaultOptions, ...options })
  const tokens = lexer.lex(source)
  const combinedRenderers = { ...defaultRenderers, ...renderers }
</script>

<Parser {tokens} renderers={combinedRenderers} />
