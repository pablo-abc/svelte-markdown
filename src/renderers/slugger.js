import { getContext } from 'svelte'
import { key } from '../markdown-parser'

export const slug = (val) => getContext(key).slug(val)
