import '@testing-library/jest-dom/extend-expect'

import { render, screen } from '@testing-library/svelte'

import SvelteMarkdown from '../src/SvelteMarkdown.svelte'

describe('testing initialization', () => {
  beforeAll(() => {
    console.warn = jest.fn()
  })

  test('accepts pre-processed tokens as source', () => {
    render(SvelteMarkdown, { source: [{
      type: 'paragraph',
      raw: 'this is an **example**',
      text: 'this is an **example**',
      tokens: [
        { type: 'text', raw: 'this is an ', text: 'this is an ' },
        { type: 'strong',
          raw: '**example**',
          text: 'example',
          tokens: [ { type: 'text', raw: 'example', text: 'example' } ],
        },
      ],
    }]})

    const element = screen.getByText('example')
    expect(element).toBeInTheDocument()
    expect(element).toContainHTML('<strong>example</strong>')
  })
})
