### File Upload

In this readme we are going to use the `urql` client for file uploads. We are going to use the server code from this [repository](https://github.com/CrispenGari/node-backend/tree/main/21_GRAPHQL_FILE_UPLOADS/01_BASIC_UPLOAD_TYPE_GRAPHQL).

### 1. server

The server code was taken from [here](https://github.com/CrispenGari/node-backend/tree/main/21_GRAPHQL_FILE_UPLOADS/01_BASIC_UPLOAD_TYPE_GRAPHQL)

### 2. client

The client is a next.js application that will serve the graphql endpoint at `http://localhost:3001/graphql`

### Setting up a client for uploads using `urql`.

First we need to install all necessary packages to create a `urql` client.

1. urql and graphql

To install `urql` and `graphql` we run the following command:

```shell
yarn add urql graphql
```

### Setting up the `urql` client.

We are going to create a `provider` folder. In this folder we are going to create a `UrqlProvider` which is nothing but a React Functional component which will takes in children and wrap our application using the `UrqlProvider`. The `UrqlProvider.tsx` will look as follows:

```tsx
import React from "react";
import { createClient, Provider, Client } from "urql";

export const client: Client = createClient({
  url: "http://localhost:3001/graphql",
});
const UrqlProvider: React.FC = ({ children }) => {
  return <Provider value={client}>{children}</Provider>;
};
export default UrqlProvider;
```

Next we will go to the `_app.txt` and wrap our application with `UrqlProvider` as follows:

```tsx
import "../styles/globals.css";
import Layout from "../components/Layout";
import UrqlProvider from "../providers/UrqlProvider";
const App = ({ Component, pageProps }) => {
  return (
    <UrqlProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </UrqlProvider>
  );
};
export default App;
```

### Uploads

> In `urql`, we may use the `@urql/exchange-multipart-fetch` package's `multipartFetchExchange` to support file uploads, which is a drop-in replacement for the default `fetchExchange`.

#### How does it works?

> It works by using the `extract-files` package. When the `multipartFetchExchange` sees at least one `File` in the variables it receives for a mutation, then it will send a `multipart/form-data` POST request instead of a standard `application/json` one. This is basically the same kind of request that we'd expect to send for regular HTML forms.

### Installation

We will need to install `@urql/exchange-multipart-fetch` by running the following command on the client package:

```shell
yarn add @urql/exchange-multipart-fetch
```

### Setting up the new `client`

Then we will go to the `UrqlProvider` and modify the `client` so that it looks as follows:

```tsx
import React from "react";
import {
  createClient,
  Provider,
  Client,
  dedupExchange,
  cacheExchange,
} from "urql";
import { multipartFetchExchange } from "@urql/exchange-multipart-fetch";

export const client: Client = createClient({
  url: "http://localhost:3001/graphql",
  exchanges: [dedupExchange, cacheExchange, multipartFetchExchange],
});
const UrqlProvider: React.FC = ({ children }) => {
  return <Provider value={client}>{children}</Provider>;
};
export default UrqlProvider;
```

### Uploading a File

Next we are going to create a `form` in the `pages/index.tsx` that will handle images selection and add them to the state as follows:

```tsx
<form onSubmit="{postImage}">
  <input
    type="file"
    accept="images/*"
    multiple="{false}"
    onChange="{handleChange}"
  />
  {image ? (
    <button type="submit">UPLOAD</button>
  ) : (
    <p>Select an image to upload first.</p>
  )}
</form>
```

We are then going to create a `query` (for all the images on the server) and `mutation` (for uploading an image to the server) document as follows:

```tsx
const ALL_FILES_QUERY = `
{
  getFiles
}
`;
const UPLOAD_IMAGE_MUTATION = `
mutation UploadFile($picture: Upload!){
  uploadFile(picture: $picture)
}
`;
```

### Query

We are going to write a query that fetches all the image urls of the images on the server as follows:

```ts
const [result, reexecuteQuery] = useQuery({
  query: ALL_FILES_QUERY,
});
```

> We are storing `reexecuteQuery` so that we will call this query every time we upload the image on the sever.

### Mutation

To upload the image we are going to use the `UPLOAD_IMAGE_MUTATION` and we will upload image straight to the server and refetch the `ALL_FILES_QUERY` every time we submit the form with a valid file as follows:

```tsx
const postImage = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  if (image?.valid) {
    await upload({
      picture: image.image,
    });
    await reexecuteQuery({ requestPolicy: "network-only" });
  } else {
    return;
  }
  setImage(undefined);
};
```

All the images are displayed on the website every time we upload the image using the following piece of code:

```tsx
<div className={styles.app__images}>
  {(result?.data as any)?.getFiles?.map((url: any) => (
    <img src={url} key={url} alt="/" />
  ))}
</div>
```

### `index.tsx`

```tsx
import styles from "../styles/Home.module.css";

import React from "react";
import { NextPage } from "next";
import { useMutation, useQuery } from "urql";

const ALL_FILES_QUERY = `
{
  getFiles
}
`;

const UPLOAD_IMAGE_MUTATION = `
mutation UploadFile($picture: Upload!){
  uploadFile(picture: $picture)
}
`;

const Home: NextPage = ({}) => {
  const [result, reexecuteQuery] = useQuery({
    query: ALL_FILES_QUERY,
  });

  const [_, upload] = useMutation(UPLOAD_IMAGE_MUTATION);

  const [image, setImage] = React.useState<any>();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setImage({
      valid: e.target.validity.valid,
      image: (e.target as any)?.files[0],
    });
  };
  const postImage = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (image?.valid) {
      await upload({
        picture: image.image,
      });
      await reexecuteQuery({ requestPolicy: "network-only" });
    } else {
      return;
    }
    setImage(undefined);
  };

  return (
    <div className={styles.app}>
      <form onSubmit={postImage}>
        <input
          type="file"
          accept="images/*"
          multiple={false}
          onChange={handleChange}
        />
        {image ? (
          <button type="submit">UPLOAD</button>
        ) : (
          <p>Select an image to upload first.</p>
        )}
      </form>
      <h1>Images on the server</h1>
      <div className={styles.app__images}>
        {(result?.data as any)?.getFiles?.map((url: any) => (
          <img src={url} key={url} alt="/" />
        ))}
      </div>
    </div>
  );
};
export default Home;
```

### Ref

1. [docs:formidable.com](https://formidable.com/open-source/urql/docs/advanced/persistence-and-uploads/)
