# Next.js

This is a walk through server side rendering using `Next.js`

## Creating a next-app

To create a next app run the following command

```shell
$ npx create-next-app <app-name> --use-npm // if you don't want to use yarn
# OR
$ yarn create next-app <app-name>
```

### Create a next app with typescript.

This is easy all you need to do is create a `tsconfig.json` file by running the following command

```
$ touch tsconfig.json
```

According to the docs, `Next.js` will automatically configure this file with default values. Providing your own `tsconfig.json` with custom compiler options is also supported, all you need to do is to run the dev server by running the following commands:

### Install typescript

```shell
$ yarn add --dev typescript @types/react @types/node
# OR
$ npm install --save-dev typescript @types/react @types/node
```

### Then

Change all the file extentions from **`.js`** to **`.tsx`**

### Run the server

```shell
$ npm run dev
```

> In this one I'm going to use TypeScript

## 1. Pages

- In `Next.js`, a page is a React Component exported from a `.js`, `.jsx`, `.ts`, or `.tsx` file in the `pages` directory.
- Each page is associated with a route based on its file name.
- the entry point is the `index.ts` or `index.js` or `index.tsx` or `index.jsx`, this file act like the main entry point which will be the home page at route `'/'`

> Let's create a simple page called `hello.tsx` and write our Hello world message.

##### `pages/hello.tsx`

```
const hello = () => {
  return (
    <div>
      <h1>Hello World</h1>
    </div>
  );
};

export default hello;
```

Now to see this message visit: http://localhost:3000/hello

### Dynamic Routing on pages

Defining routes by using predefined paths is not always enough for complex applications. In `Next.js` you can add brackets to a page ([param]) to create a dynamic route.
Let's create a folder called `users` in the `pages` folder and we will add two files:

- `index.tsx` gives us all the users
- `[uid].tsx` gives us a user with a specific id
- when the user go strait to the route http://localhost:3000/users then he/she will have a list of users
- when the user specify the `uid` then he/she will get the user info of the specific `uid` eg at: http://localhost:3000/users/5
- We are going to use a `Next.js` hook called `useRouter` coming from `next/router` to implement this

##### `pages/users/index.tsx`

```
interface User {
  uid: number;
  name: string;
  surname: string;
  age: number;
  single?: boolean;
}

const users: User[] = [
  { name: "Jonh", surname: "Doe", age: 25, uid: 1, single: true },
  { name: "Marry", surname: "Doe", age: 25, uid: 2, single: true },
  { name: "Garry", surname: "Doe", age: 25, uid: 3, single: false },
  { name: "Simpson", surname: "Doe", age: 25, uid: 4, single: false },
  { name: "Grade", surname: "Doe", age: 25, uid: 5, single: true },
];

const index = () => {
  return (
    <div>
      <pre>
        <code>{JSON.stringify(users)}</code>
      </pre>
    </div>
  );
};

export default index;

```

##### `pages/users/[uid].tsx`

```
import { useRouter } from "next/router";

const user = () => {
  const router = useRouter();

  return (
    <div>
      <pre>
        <code>
          {JSON.stringify(
            users?.filter(
              (user) => user?.uid === Number.parseInt(router?.query?.uid)
            )
          )}
        </code>
      </pre>
    </div>
  );
};

export default user;

interface User {
  uid: number;
  name: string;
  surname: string;
  age: number;
  single?: boolean;
}

const users: User[] = [
  { name: "Jonh", surname: "Doe", age: 25, uid: 1, single: true },
  { name: "Marry", surname: "Doe", age: 25, uid: 2, single: true },
  { name: "Garry", surname: "Doe", age: 25, uid: 3, single: false },
  { name: "Simpson", surname: "Doe", age: 25, uid: 4, single: false },
  { name: "Grade", surname: "Doe", age: 25, uid: 5, single: true },
];

```

- The cool thing about `Next.js` `route` we can pass the queries and be able to get them back for example:

##### `pages/users/[uid].tsx`

```
import { useRouter } from "next/router";
const user = () => {
  const router = useRouter();
  return (
    <div>
      <pre>
        <code>{JSON.stringify(router.query)}</code>
      </pre>
    </div>
  );
};
export default user;
```

- If you visit: http://localhost:3000/users/5?name=jonh&surname=doe , you will get

```
{"name":"jonh","surname":"doe","uid":"5"}
```

#### Client-side navigations to dynamic routes.

- Client-side navigations to dynamic routes are handled with `next/link`. Let's say we want to modify our files `pages/users/[uid].tsx` and `pages/users/index.tsx` to allow users to click for a specific user to get the user information.

##### `pages/users/index.tsx`

```
import Link from "next/link";

const index = () => {
  return (
    <div style={{ padding: "20px" }}>
      {users?.map((user, key) => (
        <p key={key}>
          <Link href={`/users/${user.uid}`}>
            <a
              style={{ color: "lightseagreen", cursor: "pointer" }}
            >{`${user.name} ${user.surname}`}</a>
          </Link>
        </p>
      ))}
    </div>
  );
};

export default index;
interface User {
  uid: number;
  name: string;
  surname: string;
  age: number;
  single?: boolean;
}

const users: User[] = [
  { name: "Jonh", surname: "Doe", age: 25, uid: 1, single: true },
  { name: "Marry", surname: "Doe", age: 25, uid: 2, single: true },
  { name: "Garry", surname: "Doe", age: 25, uid: 3, single: false },
  { name: "Simpson", surname: "Doe", age: 25, uid: 4, single: false },
  { name: "Grade", surname: "Doe", age: 25, uid: 5, single: true },
];

```

##### `pages/users/[uid].tsx`

```
import { useRouter } from "next/router";
import Link from "next/link";
const user = () => {
  const router = useRouter();
  return (
    <div>
      <pre>
        <code>
          {JSON.stringify(
            users?.filter(
              (user) => user?.uid === Number.parseInt(router?.query.uid)
            )[0]
          )}
        </code>
      </pre>
      <Link href="/users">
        <button>All users</button>
      </Link>
    </div>
  );
};

export default user;

interface User {
  uid: number;
  name: string;
  surname: string;
  age: number;
  single?: boolean;
}

const users: User[] = [
  { name: "Jonh", surname: "Doe", age: 25, uid: 1, single: true },
  { name: "Marry", surname: "Doe", age: 25, uid: 2, single: true },
  { name: "Garry", surname: "Doe", age: 25, uid: 3, single: false },
  { name: "Simpson", surname: "Doe", age: 25, uid: 4, single: false },
  { name: "Grade", surname: "Doe", age: 25, uid: 5, single: true },
];

```

- Now we can go to a specific user and get back to all users using the `next/link`

> Dynamic routes can be extended to catch all paths by adding three dots `(...`) inside the brackets. Example:

- Let's create a new file called `[...names].tsx` inside the `users/index.tsx` and we want to get all the names that will be passed in the route and display them in this file

##### `pages/hello.tsx`

```
import { useRouter } from "next/router";

const names = () => {
  const router = useRouter();
  return (
    <div>
      <pre>
        <code>{JSON.stringify(router.query)}</code>
      </pre>
    </div>
  );
};

export default names;

```

- Now if you visit the route: http://localhost:3000/users/name1/name2/name3/name4 the following will be the output

```
{"names":["name1","name2","name3","name4"]}
```

- That's most of it a lot is now React.js

### Documentation reference

- [Docs](https://nextjs.org/docs/)
