import React from "react";
import Navbar from "./Navbar";

const styles = {
  headerColor: {
    background: "#E4EFE7",
  },
};
function Header({ setCurrentPage }) {
  return (
    <header className="App-header">
      <h1>Anthony Nguyen</h1>
      <Navbar setCurrentPage={setCurrentPage} />
    </header>
  );
}

export default Header;
