import gql from 'graphql-tag';
import * as Urql from 'urql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type Mutation = {
  __typename?: 'Mutation';
  uploadFile: Scalars['String'];
};


export type MutationUploadFileArgs = {
  picture: Scalars['Upload'];
};

export type Query = {
  __typename?: 'Query';
  getFiles: Array<Scalars['String']>;
  helloWorld: Scalars['String'];
};

export type UploadFileMutationVariables = Exact<{
  picture: Scalars['Upload'];
}>;


export type UploadFileMutation = { __typename?: 'Mutation', uploadFile: string };

export type GetFilesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetFilesQuery = { __typename?: 'Query', getFiles: Array<string> };


export const UploadFileDocument = gql`
    mutation UploadFile($picture: Upload!) {
  uploadFile(picture: $picture)
}
    `;

export function useUploadFileMutation() {
  return Urql.useMutation<UploadFileMutation, UploadFileMutationVariables>(UploadFileDocument);
};
export const GetFilesDocument = gql`
    query GetFiles {
  getFiles
}
    `;

export function useGetFilesQuery(options?: Omit<Urql.UseQueryArgs<GetFilesQueryVariables>, 'query'>) {
  return Urql.useQuery<GetFilesQuery>({ query: GetFilesDocument, ...options });
};