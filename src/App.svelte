<script>
  import SvelteMarkdown from './SvelteMarkdown.svelte';
</script>

<main>
  <SvelteMarkdown body="
# Hello

Hello
[this is](https://google.com)
*trying*
![Hello](https://static2.cbrimages.com/wordpress/wp-content/uploads/2019/02/jojo-bizarre-adventure.jpg)

**strong**

| Hi |
|----|
| Hello |

* hello
* How are you
  1. How are you

2. Hello
2. How are you

---

Hi

> Testing this

`As well as this`

```html
<div></div>
```

~~Hi~~

<h1>Hola</h1>" />
</main>

<style>
  main {
      text-align: center;
      padding: 1em;
      max-width: 240px;
      margin: 0 auto;
  }

  h1 {
      color: #ff3e00;
      text-transform: uppercase;
      font-size: 4em;
      font-weight: 100;
  }

  @media (min-width: 640px) {
      main {
	  max-width: none;
      }
  }
</style>
