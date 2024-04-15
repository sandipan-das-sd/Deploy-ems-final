import React from "react";

const Error = () => {
  const styles = {
    body: {
      backgroundColor: "#f5f5f5",
      marginTop: "8%",
      color: "#5d5d5d",
      fontFamily:
        '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"',
      textShadow: "0px 1px 1px rgba(255,255,255,0.75)",
      textAlign: "center !important",
    },
    h1: {
      fontSize: "2.45em",
      fontWeight: 700,
      color: "#5d5d5d",
      letterSpacing: "-0.02em",
      marginBottom: "30px",
      marginTop: "30px",
    },
    container: {
      width: "100%",
      marginRight: "auto",
      marginLeft: "auto",
    },
    animated: {
      WebkitAnimationDuration: "1s",
      animationDuration: "1s",
      WebkitAnimationFillMode: "both",
      animationFillMode: "both",
    },
    fadeIn: {
      WebkitAnimationName: "fadeIn",
      animationName: "fadeIn",
    },
    info: {
      color: "#5594cf",
      fill: "#5594cf",
    },
    error: {
      color: "#c92127",
      fill: "#c92127",
    },
    warning: {
      color: "#ffcc33",
      fill: "#ffcc33",
    },
    success: {
      color: "#5aba47",
      fill: "#5aba47",
    },
    iconLarge: {
      height: "132px",
      width: "132px",
    },
    descriptionText: {
      color: "#707070",
      letterSpacing: "-0.01em",
      fontSize: "1.25em",
      lineHeight: "20px",
    },
    footer: {
      marginTop: "40px",
      fontSize: "0.7em",
    },
    delay1s: {
      WebkitAnimationDelay: "1s",
      animationDelay: "1s",
    },
    keyframesFadeIn: {
      from: { opacity: 0 },
      to: { opacity: 1 },
    },
  };

  return (
    <div style={styles.container} className="text-center">
      <div className="row">
        <div className="col">
          <div style={{ ...styles.animated, ...styles.fadeIn }}>
            <svg
              style={styles.warning}
              className="icon-large fa-hard-hat"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              width="132"
              height="132"
            >
              <path d="M480 288c0-80.25-49.28-148.92-119.19-177.62L320 192V80a16 16 0 0 0-16-16h-96a16 16 0 0 0-16 16v112l-40.81-81.62C81.28 139.08 32 207.75 32 288v64h448zm16 96H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h480a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16z"></path>
            </svg>
          </div>
          <h1 style={{ ...styles.animated, ...styles.fadeIn }}>
            We're working on it!
          </h1>
          <div
            style={{
              ...styles.descriptionText,
              ...styles.animated,
              ...styles.fadeIn,
              ...styles.delay1s,
            }}
          >
            <p>This site is currently under construction.</p>
            <p>Please check back soon.</p>
            <section style={styles.footer}>
              {" "}
              <strong>Domain: </strong>Coming Soon...
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Error;
