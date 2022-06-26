import React from "react";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src="/logo.png" alt="Cryptoonia" />
      </div>
      <div className="navright">
        <div
          className="nav-item"
          onClick={() => {
            window.open(
              "https://navraj-sharma.gitbook.io/cryptoonia/game-play"
            );
          }}
        >
          Gameplay
        </div>
        <div
          className="nav-item"
          onClick={() => {
            window.open("https://navraj-sharma.gitbook.io/cryptoonia/roadmap");
          }}
        >
          Roadmap
        </div>
        <div
          className="nav-item"
          onClick={() => {
            window.open("https://navraj-sharma.gitbook.io/cryptoonia/");
          }}
        >
          Whitepaper
        </div>
        <button>Connect</button>
      </div>
    </div>
  );
};

export default Navbar;
