import "../styles/globals.css";
import ThemeConfig from "../theme";
import { Header } from "../layout";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeConfig>
      <Header />
      <Component {...pageProps} />
    </ThemeConfig>
  );
}

export default MyApp;
