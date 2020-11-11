import React, { useState } from "react";
import ReactDom from "react-dom";
import { ThemeProvider } from "styled-components";
// import {
//   PrimaryButton,
//   SecondaryButton,
//   TertiaryButton,
// } from "./components/buttons";
import { SignUpModal } from "./components";
import { GlobalStyle, defaultTheme, darkTheme } from "./utils";

const App = () => {
  const [useDarkTheme, setUseDarkTheme] = useState(false);
  const [showModal, setShowModal] = useState(false);
  return (
    <ThemeProvider theme={useDarkTheme ? darkTheme : defaultTheme}>
      <button
        style={{ margin: "0 16px 24px", padding: "8px", background: "none" }}
        onClick={() => setUseDarkTheme(true)}
      >
        Dark theme
      </button>
      <button
        style={{ margin: "0 16px 24px", padding: "8px", background: "none" }}
        onClick={() => setUseDarkTheme(false)}
      >
        Default theme
      </button>
      <button
        style={{ margin: "0 16px 24px", padding: "8px", background: "none" }}
        onClick={() => setShowModal(!showModal)}
      >
        Toggle Modal
      </button>
      <div
        style={{
          background: useDarkTheme
            ? defaultTheme.primaryColor
            : darkTheme.primaryColor,
          width: "100vw",
          height: "80vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        {/* <PrimaryButton modifiers={["small"]}>Hello World</PrimaryButton> */}
        {/* <SecondaryButton modifiers={["large"]}>Goodbye World</SecondaryButton> */}
        {/* <TertiaryButton>Hey</TertiaryButton> */}
        <SignUpModal showModal={showModal} setShowModal={setShowModal} />
        <GlobalStyle />
      </div>
    </ThemeProvider>
  );
};

ReactDom.render(<App />, document.querySelector("#root"));
