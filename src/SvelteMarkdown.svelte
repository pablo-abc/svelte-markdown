<script context="module">
  import marked from 'marked';
  import Renderer from './Renderer.svelte';
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
  } from './renderers';
  const lexer = new marked.Lexer();
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
  const renderers = defaultRenderers;
</script>

<script>
  export let body = '';
  const tokens = lexer.lex(body);
  const renderers = defaultRenderers;
</script>

<Renderer {tokens} {renderers} />
