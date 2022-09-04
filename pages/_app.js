import "../styles/globals.css";
import Layout from "../components/Layout";
import { HodlProvider } from "../store/hodl";

function MyApp({ Component, pageProps }) {
    return (
        <HodlProvider>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </HodlProvider>
    );
}

export default MyApp;
