import { gql } from "@apollo/client";

export const LOGIN_MUTATION = gql`
  mutation Login($input: LoginInput!) {
    login(input: $input) {
      user {
        username
        username
        email
        id
        createdAt
        updatedAt
      }
      error {
        field
        message
      }
    }
  }
`;
