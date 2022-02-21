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
