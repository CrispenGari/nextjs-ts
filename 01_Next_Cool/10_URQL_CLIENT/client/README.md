### Client

In this readme we are going to show examples on how to run queries and mutations from a graphql server using the [urql]() client.

<img src="https://external-preview.redd.it/T4oaw2IogATCYCOCHb2cTk4xL4S3KIuGnX06aT0ehpQ.jpg?auto=webp&s=686bb1fe373951c0de9f686c0881fe1238cf09e5" alt="" width="100%"/>

### URQL client

`urql` is a highly customizable and versatile GraphQL client with which you add on features like normalized caching as you grow.

### Installation

To install `urql` we run the following command:

```shell
yarn add urql graphql
```

> Note that we also need to install `graphql`

### Setting up the client

We are going to use the higher level project structure. We are going to create a folder called `providers`.

```
📁 providers
    - UrqlProvider.tsx
    ...
```

> Note that `...` represents the other providers that will wrap our nextjs application and `UrqlProvider.tsx` file contains all the all the code for creating the `urql` provider together with the client.

Let's go to the `UrqlProvider.tsx` and add the following code to it.

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

Now we will go to the `_app.tsx` file that is located in the pages folder and customize it as follows:

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

### Queries and mutations

We are going to create a simple web application that performs `CRUD` operations on todo.

### Queries

This are operations that are made to the graphql server to get the data.

### Mutations

These are operations that are made to the graphql server or api to either save, update or delete data.

### Refs

1. [urql](https://formidable.com/open-source/urql/docs/basics/react-preact/)
