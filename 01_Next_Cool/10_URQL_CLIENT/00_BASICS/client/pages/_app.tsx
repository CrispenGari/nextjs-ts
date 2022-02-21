import "../styles/globals.css";
import Layout from "../components/Layout";
import UrqlProvider from "../providers/UrqlProvider";
const App = ({ Component, pageProps }) => {
  return (
    <UrqlProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </UrqlProvider>
  );
};
export default App;
