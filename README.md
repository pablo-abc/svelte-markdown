# Svelte Markdown

A markdown parser that renders into Svelte Components. Inspired by [ReactMarkdown](https://github.com/remarkjs/react-markdown).

## Installation

You can install it with

```console
$ npm i -S svelte-markdown
```

If you use npm or if you prefer yarn

```console
$ yarn add svelte-markdown
```

If you're using Sapper you might need to install it as a dev dependency.

## Usage

```html
<script>
  import SvelteMarkdown from 'svelte-markdown'
  const source = `
  # This is a header

This is a paragraph.

* This is a list
* With two items
  1. And a sublist
  2. That is ordered
    * With another
    * Sublist inside

| And this is | A table |
|-------------|---------|
| With two    | columns |`
</script>

<SvelteMarkdown {source} />
```

This would render something like

```html
<h1>This is a header</h1>
<p>This is a paragraph.</p>
<ul>
  <li>This is a list</li>
  <li>
    With two items
    <ol start="1">
      <li>And a sublist</li>
      <li>
        That is ordered
        <ul>
          <li>With another</li>
          <li>Sublist inside</li>
        </ul>
      </li>
    </ol>
  </li>
</ul>
<table>
  <thead>
    <tr><th>And this is</th><th>A table</th></tr>
  </thead>
  <tbody>
    <tr><td>With two</td><td>columns</td></tr>
  </tbody>
</table>
```

## Note

Just like with React Markdown, this package doesn't use `{@html ...}` unless you need to render HTML.

## Options

As of now there are only two options:

* `source` - *string* The Markdown source to be parsed.
* `renderers` - *object (optional)* An object where the keys represent a node type and the value is a Svelte component. This object will be merged with the default renderers. For now you can check how the default renderers are written in the source code at `src/renderers`.
* `options` - *object (optional)* An object containing [options for Marked](https://marked.js.org/using_advanced#options)

## Available renderers

These would be the property names expected by the `renderers` option.

- `text` - Text rendered inside of other elements, such as paragraphs
- `paragraph` - Paragraph (`<p>`)
- `em` - Emphasis (`<em>`)
- `strong` - Strong/bold (`<strong>`)
- `hr` - Horizontal rule / thematic break (`<hr>`)
- `blockquote` - Block quote (`<blockquote>`)
- `del` - Deleted/strike-through (`<del>`)
- `link` - Link (`<a>`)
- `image` - Image (`<img>`)
- `table` - Table (`<table>`)
- `tablehead` - Table head (`<thead>`)
- `tablebody` - Table body (`<tbody>`)
- `tablerow` - Table row (`<tr>`)
- `tablecell` - Table cell (`<td>`/`<th>`)
- `list` - List (`<ul>`/`<ol>`)
- `listitem` - List item (`<li>`)
- `heading` - Heading (`<h1>`-`<h6>`)
- `codespan` - Inline code (`<code>`)
- `code` - Block of code (`<pre><code>`)
- `html` - HTML node

## Developing

As of now there is no tests on this project, and the only way to test it is to try it is to create another Svelte app and link this to it.

You can clone this repo and do the following:

```console
$ yarn
$ yarn link
$ yarn dev
```

This will watch all changes and make the project linkable. Now on the app you created you can link it with:

```console
$ yarn link svelte-markdown
```

And then import it like in the example above.

As of now the only external dependency of this project is `marked`.

## Related

- [ReactMarkdown](https://github.com/remarkjs/react-markdown) - React library to render markdown using React components. Inspiration for this library.
- [Svelte](https://svelte.dev) - JavaScript front-end framework.
- [Marked](https://marked.js.org/) - Markdown parser
