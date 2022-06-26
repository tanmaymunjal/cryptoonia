import React, { useState } from "react";
import AppContext from "./appContext";

const AppState = (props) => {
  const [appView, setAppView] = useState(1);

  const updateState = (view) => {
    setAppView(view);
  };

  const appState = {
    view: appView,
  };
  return (
    <AppContext.Provider value={{ appState, updateState }}>
      {props.children}
    </AppContext.Provider>
  );
};

export default AppState;
