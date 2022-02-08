### Authentication

In this stack we are going to create a basic cookie based authentication in nodejs. The application will be served using next.js client using server side rendering.

### Techs used

This is a multi-repo which consist of two packages.

### server

The following is a list of major techs that were used in the `server` package:

1. typeorm
2. type-graphql
3. express
4. mysql
5. typescript

## client

The following is a list of major techs that were used in the `client` package:

1. apollo
2. nextjs
3. typescript

### Authentication Flow

1. The user create an account and get authenticated using `register` graphql mutation
2. The user can logout using the `logout` graphql mutation
3. The user can login to the application using `login` graphql mutation
4. The user data will be retrieved from the server using the graphql `user` query.
5. We keep tracking the user's state of authentication using `cookies` therefore we have a `cookie` query that queries data from the server before the page is rendered to the client and do some server-side redirects if conditions are met.

> **_Note that the cookie is set to expire in a year._**.
