import type { MarkedExtension as MarkedConfig, Tokens } from 'marked'
import type { SvelteComponentTyped } from 'svelte'

type MarkedRendererProps<
  T extends { type: string; raw: string; text?: string }
> = Omit<T, 'type'>

type Renderers = {
  text: SvelteComponentTyped<MarkedRendererProps<Tokens.Text>>
  paragraph: SvelteComponentTyped<MarkedRendererProps<Tokens.Paragraph>>
  em: SvelteComponentTyped<Omit<Tokens.Em, 'type' | 'text'>>
  strong: SvelteComponentTyped<MarkedRendererProps<Tokens.Strong>>
  hr: SvelteComponentTyped<MarkedRendererProps<Tokens.Hr>>
  blockquote: SvelteComponentTyped<MarkedRendererProps<Tokens.Blockquote>>
  del: SvelteComponentTyped<MarkedRendererProps<Tokens.Del>>
  link: SvelteComponentTyped<MarkedRendererProps<Tokens.Link>>
  image: SvelteComponentTyped<MarkedRendererProps<Tokens.Image>>
  table: SvelteComponentTyped<{}>
  tablehead: SvelteComponentTyped<{}>
  tablebody: SvelteComponentTyped<{}>
  tablerow: SvelteComponentTyped<{}>
  tablecell: SvelteComponentTyped<{}>
  list: SvelteComponentTyped<MarkedRendererProps<Tokens.List>>

  // Technically, listItem includes {type: string, tokens: []} in the props,
  // but that's probably unintentional
  listitem: SvelteComponentTyped<MarkedRendererProps<Tokens.ListItem>>
  heading: SvelteComponentTyped<MarkedRendererProps<Tokens.Heading>>
  codespan: SvelteComponentTyped<MarkedRendererProps<Tokens.Codespan>>
  code: SvelteComponentTyped<MarkedRendererProps<Tokens.Code>>

  // Note there's some weird behaviour involved with this ATM.
  /**
   * If the html is an inline element, it *should* be a Tag token (e.g `span`, `a`)
   * If it's a block element, it *should* be an HTML token (e.g `div`, `p`).
   *
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Block-level_elements#elements}
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Inline_elements#elements}
   */
  html: SvelteComponentTyped<MarkedRendererProps<Tokens.HTML | Tokens.Tag>>
}

type Props = {
  /**
   * The Markdown source to be parsed.
   */
  source: string

  /**
   * An object where the keys represent a node type and the value is a Svelte
   * component.
   * This object will be merged with the default renderers.
   */
  renderers?: Partial<Renderers>

  /**
   * Options for [marked](https://marked.js.org/using_advanced#options)
   */
  options?: MarkedConfig
}

declare const SvelteMarkdown: SvelteComponentTyped<Props>

export default SvelteMarkdown
