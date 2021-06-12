### Head

By default `next.js` doesn't expose html to us. Sometimes we want to be able to set the html
head ourselves for example setting the `title` of our page. We can do this by using the `Head` element in Next.js. Let's say want to set the following properties to our `head`.

```html
<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Is this my head.</title>
  <link
    rel="shortcut icon"
    href="./static/favicon-mask.svg"
    type="image/x-icon"
  />
</head>
```

We will use our `components/head.js` file to create the page's head. Note that this head need to be accessed by all pages in the application so it is recommended to use the [Layout](https://github.com/CrispenGari/Nextjs-ts/tree/main/01_Next_Cool/02_Next_Layout) component that was discussed back in the series.

### `pages/index.js`

```js
import Head from "next/head";

export default () => (
  <Head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Is this my head.</title>
    <link
      rel="shortcut icon"
      href="../static/favicon-mask.svg"
      type="image/x-icon"
    />
  </Head>
);
```

Now mounting our `<head>` in the home page we do it as follows

### `pages/index.js`

```js
import Head from "../components/head";
export default () => (
  <div>
    <Head />
    <h1>Head</h1>
  </div>
);
```
