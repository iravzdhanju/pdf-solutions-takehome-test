import "../styles/globals.scss";

import "../src/asset/scss/style.scss";
import { Provider } from "react-redux";
import store from "../store/index.js";
function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
