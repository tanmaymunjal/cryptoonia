import React from "react";

const AppComponent = () => {
  return (
    <div className="pageComponent">
      <div className="componentLeft">
        <img src="/assistant.png" alt="" />
      </div>
      <div className="componentRight">
        <div className="comingsoon">Coming Soon...</div>
        <img
          src="/discord.png"
          alt="Cryptoonia discord"
          height="100px"
          width="100px"
        />
      </div>
    </div>
  );
};

export default AppComponent;
