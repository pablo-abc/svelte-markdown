<script>
  import { setContext, createEventDispatcher, onMount } from 'svelte'
  import Parser from './Parser.svelte'
  import { key } from './context'
  import { Slugger, defaultOptions, defaultRenderers, lexer, parseInline } from './markdown-parser'

  export let source = []
  export let renderers = {}
  export let options = {}
  export let isInline = false

  const dispatch = createEventDispatcher();

  let tokens;
  let mounted;

  $: preprocessed = Array.isArray(source)
  $: slugger = source ? new Slugger : undefined
  $: combinedOptions = { ...defaultOptions, ...options }
  $: if (preprocessed) {
    tokens = source
  } else {
    tokens = isInline ? parseInline(source) : lexer(source)

    dispatch('parsed', { tokens })
  }

  $: combinedRenderers = { ...defaultRenderers, ...renderers }

  setContext(key, {
    slug: (val) => slugger ? slugger.slug(val) : '',
    getOptions: () => combinedOptions
  })
  $: mounted && !preprocessed && dispatch('parsed', { tokens })

  onMount(() => {
    mounted = true
  });
</script>

<Parser {tokens} renderers={combinedRenderers} />
