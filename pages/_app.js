import "../styles/globals.css";
import "../styles/navbar.css";
import "../styles/appComponent.css";
import "../styles/footer.css";
import "../styles/intro.css";

import { useContext } from "react";
import AppState from "../context/appState";

function MyApp({ Component, pageProps }) {
  return (
    <AppState>
      <Component {...pageProps} />
    </AppState>
  );
}

export default MyApp;
