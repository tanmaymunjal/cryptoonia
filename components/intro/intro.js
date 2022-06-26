import React from "react";
import { useEffect, useState } from "react";
import { useContext } from "react";
import AppContext from "../../context/appContext";

const Intro = () => {
  const appview = useContext(AppContext);
  const [scrollPos, setScrollPos] = useState(0);

  useEffect(() => {
    window.addEventListener("wheel", handleScroll);
    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, []);

  const handleScroll = (e) => {
    if (e.deltaY > 0) {
      setScrollPos((scrollPos) => {
        return scrollPos + 1;
      });
    } else {
      setScrollPos((scrollPos) => {
        if (scrollPos <= 0) {
          return 0;
        }
        return scrollPos - 1;
      });
    }
  };

  const introPageColor = () => {
    if (scrollPos <= 40) {
      return { backgroundColor: "black" };
    } else if (scrollPos < 100) {
      return {
        backgroundColor:
          "rgba(" +
          ((255 * scrollPos) / 20 - 510) +
          ", " +
          ((255 * scrollPos) / 20 - 510) +
          ", 0, 1)",
      };
    } else {
      return { backgroundColor: "rgba(1, 103, 126, 1)" };
    }
  };

  const styles = {
    introPage: introPageColor(),
    overlay:
      scrollPos < 20
        ? {
            transform: "scale(2.5) translateX(-" + scrollPos + "px )",
            opacity: "50%",
          }
        : {
            transform: "scale(2.5) translateX(-" + scrollPos + "px )",
            opacity: 150 - 5 * scrollPos + "%",
          },
    anim1: { transform: "scale(" + (scrollPos * 0.05 - 0.5) + ")" },
    anim2: {
      transform: "scale(1.5)",
      color:
        "rgba(" +
        ((-255 * scrollPos) / 20 + 255 * 3) +
        ", " +
        ((-255 * scrollPos) / 20 + 255 * 3) +
        ", " +
        ((-255 * scrollPos) / 20 + 255 * 3) +
        ", 1)",
    },
    anim3: {
      height: "100vh",
      width: "100vw",
      transform: "scale(" + (17 - scrollPos / 5) + ")",
    },
    anim4: {
      height: "100vh",
      width: "100vw",
    },
    anim5: {
      color: "white",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      fontSize: "5rem",
      animation: "4s expand",
    },
    anim6: {
      height: "100vh",
      width: "100vw",
      transform: "scale(" + (scrollPos * 0.05 - 4.5) + ")",
      //   transform: "scale(1.5)",
    },
    anim7: {
      height: "100vh",
      width: "100vw",
      transform: "scale(1.5)",
      animation: "2s expandfromOriginal",
    },
  };

  if (scrollPos <= 140) {
    return (
      <>
        <div className="introPage" style={styles.introPage}>
          {scrollPos >= 0 && scrollPos < 30 && (
            <>
              <div className="overlay" style={styles.overlay}>
                <img src="/mist.png" alt="" />
              </div>
            </>
          )}
          {scrollPos > 10 && scrollPos <= 40 && (
            <div style={styles.anim1}>In the mist of cryptocurrencies...</div>
          )}
          {scrollPos > 40 && scrollPos <= 60 && (
            <div style={styles.anim2}>the MAKER emerged...</div>
          )}
          {scrollPos > 60 && scrollPos <= 80 && (
            <div style={styles.anim3}>
              <img src="/MAKER.png" alt="" height="100%" width="100%" />
            </div>
          )}
          {scrollPos > 80 && scrollPos <= 100 && (
            <div style={styles.anim4}>
              <img src="/MAKER.png" alt="" height="100%" width="100%" />
            </div>
          )}
          {scrollPos > 100 && scrollPos <= 110 && (
            <div style={styles.anim5}>Cryptoonia was born.</div>
          )}
          {scrollPos > 110 && scrollPos <= 120 && (
            <div style={styles.anim6}>
              <img src="/Map.png" alt="" height="100%" width="100%" />
            </div>
          )}
          {scrollPos > 120 && scrollPos <= 125 && (
            <div style={styles.anim5}>And the fun began...</div>
          )}
          {scrollPos > 125 && scrollPos <= 130 && (
            <div style={styles.anim7}>
              <img src="/altCoint.png" alt="" height="100%" width="100%" />
            </div>
          )}
          {scrollPos > 130 && scrollPos <= 133 && (
            <div style={styles.anim7}>
              <img src="/image2.png" alt="" height="100%" width="100%" />
            </div>
          )}
          {scrollPos > 133 && scrollPos <= 135 && (
            <div style={styles.anim7}>
              <img src="/image3.png" alt="" height="100%" width="100%" />
            </div>
          )}
          {scrollPos > 135 && scrollPos <= 136 && (
            <div style={styles.anim7}>
              <img src="/image4.png" alt="" height="100%" width="100%" />
            </div>
          )}
          {scrollPos > 136 && scrollPos <= 137 && (
            <div style={styles.anim7}>
              <img src="/logo.png" alt="" height="100%" width="100%" />
            </div>
          )}
          {scrollPos > 137 && scrollPos <= 140 && (
            <div style={styles.anim5}>Coming soon...</div>
          )}
        </div>
      </>
    );
  } else {
    appview.updateState(2);
    return <></>;
  }
};

export default Intro;
