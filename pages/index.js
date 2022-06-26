import Navbar from "../components/navbar";
import Footer from "../components/footer";
import AppComponent from "../components/appComponent";
import Intro from "../components/intro/intro";

import { useContext } from "react";
import AppContext from "../context/appContext";
export default function Home() {
  const appview = useContext(AppContext);

  const LandingPage = () => {
    return (
      <div>
        <Navbar />
        <AppComponent />
        <Footer />
      </div>
    );
  };

  if (appview.appState.view === 1) {
    return (
      <>
        <Intro />
      </>
    );
  } else {
    return (
      <>
        <LandingPage />
      </>
    );
  }
}
