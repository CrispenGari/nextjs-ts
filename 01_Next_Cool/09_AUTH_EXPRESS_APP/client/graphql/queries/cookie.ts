import { gql } from "@apollo/client";

export const COOKIE_QUERY = gql`
  query Cookie($input: String!) {
    cookie(cookie: $input)
  }
`;
