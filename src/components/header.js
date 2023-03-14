import React from "react";
import Navbar from "./navbar";

const styles = {
  headerColor: {
    background: "#E4EFE7",
  },
};
function Header() {
  return (
    <header className="App-header">
      <h1>Anthony Nguyen</h1>
      <Navbar />
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </header>
  );
}

export default Header;
