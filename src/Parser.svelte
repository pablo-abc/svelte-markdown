<script>
  import Parser from './Parser.svelte';
  import { supressWarnings } from './supress-warnings'

  /**
   * @typedef {Object} Props
   * @property {any} [type]
   * @property {any} [tokens]
   * @property {any} [header]
   * @property {any} [rows]
   * @property {boolean} [ordered]
   * @property {any} renderers
   */

  /** @type {Props & { [key: string]: any }} */
  let {
    type = undefined,
    tokens = undefined,
    header = undefined,
    rows = undefined,
    ordered = false,
    renderers,
    ...rest
  } = $props();

  supressWarnings();
</script>

{#if !type}
  {#each tokens as token}
    <Parser {...token} {renderers} />
  {/each}
{:else}
  {#if renderers[type]}
    {#if type === 'table'}
      <renderers.table>
        <renderers.tablehead>
          <renderers.tablerow>
            {#each header as headerItem, i}
              <renderers.tablecell
                header={true}
                align={rest.align[i] || 'center'}
                >
                <Parser tokens={headerItem.tokens} {renderers} />
              </renderers.tablecell>
            {/each}
          </renderers.tablerow>
        </renderers.tablehead>
        <renderers.tablebody>
          {#each rows as row}
            <renderers.tablerow>
              {#each row as cells, i}
                <renderers.tablecell
                  header={false}
                  align={rest.align[i] || 'center'}
                  >
                  <Parser tokens={cells.tokens} {renderers} />
                </renderers.tablecell>
              {/each}
            </renderers.tablerow>
          {/each}
        </renderers.tablebody>
      </renderers.table>
    {:else if type === 'list'}
      {#if ordered}
        <renderers.list {ordered} {...rest}>
          {#each rest.items as item}
            {@const SvelteComponent = renderers.orderedlistitem || renderers.listitem}
            <SvelteComponent {...item}>
              <Parser tokens={item.tokens} {renderers} />
            </SvelteComponent>
          {/each}
        </renderers.list>
      {:else}
        <renderers.list {ordered} {...rest}>
          {#each rest.items as item}
            {@const SvelteComponent_1 = renderers.unorderedlistitem || renderers.listitem}
            <SvelteComponent_1 {...item}>
              <Parser tokens={item.tokens} {renderers} />
            </SvelteComponent_1>
          {/each}
        </renderers.list>
      {/if}
    {:else}
      {@const SvelteComponent_2 = renderers[type]}
      <SvelteComponent_2 {...rest}>
        {#if tokens}
          <Parser {tokens} {renderers} />
        {:else}
          {rest.raw}
        {/if}
      </SvelteComponent_2>
    {/if}
  {/if}
{/if}
