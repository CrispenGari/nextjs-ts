### GraphQL code Gen and urql

We are going to use the client and server from [this](https://github.com/CrispenGari/nextjs-ts/tree/main/01_Next_Cool/10_URQL_CLIENT/01_FILE_UPLOAD) repository and expand it to make use of the `graphql-code-gen` tool.

### Setting up

First we will go to the `client` and run the following command:

```shell
yarn add @graphql-codegen/cli
```

Next we are going to install `@graphql-codegen/typescript-urql` by running the following command

```shell
yarn add @graphql-codegen/typescript-urql
```

Next we are going to run the following code:

```shell
yarn graphql-codegen init
```

Then we will run the following command to install required packages:

```shell
yarn
```

We will modify our `package.json` file and add the `gen` script which is responsible for generating code using the graphql code generator.

```json
{
  "gen": "graphql-codegen --config codegen.yml"
}
```

We are going to open the `codegen.yml` file and modify it to look as follows:

```yml
overwrite: true
schema: "http://localhost:3001/graphql"
documents: "src/**/*.graphql"
generates:
  src/generated/graphql.tsx:
    config:
      withHooks: true
    plugins:
      - typescript
      - typescript-operations
      - typescript-urql
```

Next we are going to create `.graphql` files in the `src/graphql/**` folder(s) so that the graphql code gen will be able to pick up all `.graphql` files as graphql documents.

1. src/graphql/mutation/uploadImage.graphql

```graphql
mutation UploadFile($input: Upload!) {
  uploadFile(picture: $input)
}
```

2. src/graphql/query/allFiles.graphql

```graphql
query GetFiles {
  getFiles
}
```

### Generating code using the `codegen`

Run the command:

```shell
yarn gen
```

### Using generated Hooks

Now we can use the `useUploadFileMutation()` and `useGetFilesQuery()`. Our `index.tsx` will look as follows:

```ts
import styles from "../styles/Home.module.css";

import React from "react";
import { NextPage } from "next";
import {
  useGetFilesQuery,
  useUploadFileMutation,
} from "../src/generated/graphql";
const Home: NextPage = ({}) => {
  const [result, reexecuteQuery] = useGetFilesQuery();

  const [_, upload] = useUploadFileMutation();

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

### Ref.

1. [docs: graphql-code-gen](https://www.graphql-code-generator.com/docs/getting-started/installation)

2. [www.graphql-code-generator.com/plugins/typescript-urql](https://www.graphql-code-generator.com/plugins/typescript-urql)

3. [graphql-codegen-best-practices](https://www.the-guild.dev/blog/graphql-codegen-best-practices)
