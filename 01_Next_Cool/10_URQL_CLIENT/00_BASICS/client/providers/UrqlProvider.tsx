import React from "react";
import { createClient, Provider, Client } from "urql";

export const client: Client = createClient({
  url: "http://localhost:3001/graphql",
});
const UrqlProvider: React.FC = ({ children }) => {
  return <Provider value={client}>{children}</Provider>;
};
export default UrqlProvider;
