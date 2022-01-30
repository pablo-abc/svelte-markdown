import '@testing-library/jest-dom/extend-expect'

import { render, screen } from '@testing-library/svelte'

import SvelteMarkdown from '../src/SvelteMarkdown.svelte'
import TestRenderer from './TestRenderer.svelte'

describe('testing extensions', () => {
  beforeAll(() => {
    console.warn = jest.fn()
  })

  test('renders a custom token with an extension and custom component', () => {
    const testTokenizerExtension = {
      name: 'test',
      level: 'inline',
      start(src) {
        return src.match(/\[\[/).index
      },
      tokenizer(src) {
        const rule = /^\[\[test(?:(?=.*?\svalue="(.*?)".*?|.*)(?=.*?\smessage="(.*?)(?<!\\)".*?|.*).*?|\s*)\]\]/
        const match = rule.exec(src)
        if (match) {
          return {
            type: 'test',
            raw: match[0],
            value: match[1],
            message: match[2],
          }
        }
      },
    }

    render(SvelteMarkdown, {
      source: '[[test value="5" message="test message"]]',
      use: { extensions: [testTokenizerExtension] },
      renderers: { test: TestRenderer },
    })

    const element = screen.getByText('test message', { exact: false })
    expect(element).toBeInTheDocument()
    expect(element).toContainHTML('<span>test message: 5</span>')
  })
})
