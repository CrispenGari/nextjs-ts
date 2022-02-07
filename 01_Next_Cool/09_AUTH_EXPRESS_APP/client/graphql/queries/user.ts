import { gql } from "@apollo/client";
export const USER_QUERY = gql`
  {
    user {
      username
      email
      id
      createdAt
      updatedAt
    }
  }
`;
