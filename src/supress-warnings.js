import { onMount } from 'svelte'

export function supressWarnings(renderers) {
  // https://vitejs.dev/guide/env-and-mode.html
  if (import.meta?.env?.DEV === false) return; // we're suppressing warnings that are only shown in dev mode

  const isBrowser = typeof window !== "undefined" && typeof window.document !== "undefined";
  if (!isBrowser) return; // we don't want to change anything on the server, especially, because we only undo the change on the client (in onMount)

  const markdownComponentNames = Object.values(renderers)
    .map(r => r?.name)
    .filter(r => !!r)
    .join('|');

  const unknownPropsRegex = new RegExp(`<(${markdownComponentNames})(_[\w$]+)?> was created (with unknown|without expected) prop`);
  const unexpectedSlotRegex = new RegExp(`<(${markdownComponentNames})(_[\w$]+)?> received an unexpected slot ["']default["']`);

  // Nasty hack to silence harmless warnings the user can do nothing about. SvelteKit does the same thing:
  // https://github.com/sveltejs/kit/blob/976a8b80fb4fa9ac2e7938deb3ea248b2d54dfa1/packages/kit/src/runtime/client/client.js#L1557C1-L1571C2
  const origWarn = console.warn;
  console.warn = (...args) => {
    if (
      args.length === 1 &&
      (unknownPropsRegex.test(args[0]) || unexpectedSlotRegex.test(args[0]))
    ) {
      return;
    }
    origWarn(...args);
  };

  onMount(() => {
    console.warn = origWarn
  });
}
