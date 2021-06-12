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

```ts
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

```ts
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

```ts
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

```ts
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

```json
{ "name": "jonh", "surname": "doe", "uid": "5" }
```

#### Client-side navigations to dynamic routes.

- Client-side navigations to dynamic routes are handled with `next/link`. Let's say we want to modify our files `pages/users/[uid].tsx` and `pages/users/index.tsx` to allow users to click for a specific user to get the user information.

##### `pages/users/index.tsx`

```ts
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

```ts
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

```ts
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

```json
{ "names": ["name1", "name2", "name3", "name4"] }
```

## 2. Styles

#### Global Styles

Inside the pages folder create a file called `_app.tsx` and paste the following code into it.

##### `pages/_app.tsx`

```ts
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
export default MyApp;
```

- In the root folder create a `styles` folder and inside it create a file called `globals.css`

##### `styles/globals.css`

```css
/*  GLOBAL STYLES GOES HERE*/

* {
  margin: 0;
  ....;
}
```

#### NON-Global Styles

Suppose we want to style our `Home` page in that case we need to create a `styles` file and then import it on the top of the file as shown in the code below.

```ts
import styles from "../styles/Home.module.css";

const Home = () => (
  <div className={styles.home}>
    <h1>Home</h1>
  </div>
);
export default Home;
```

> Note that the file has a name `Home.module.css` that module at the midle is very important. Which means we have created a file `styles/Home.module.css` which look as follows:

```css
.home {
  padding: 20px;
  color: white;
  background: black;
}
```

- **For SASS and or SCSS** visit the documentation on how to configure those
  - [Docs](https://nextjs.org/docs/basic-features/built-in-css-support)

* That's most of it a lot is now React.js

### Documentation reference

- [Docs](https://nextjs.org/docs/)
