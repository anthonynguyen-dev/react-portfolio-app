import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Project from "./components/Page/Projects";
import About from "./components/Page/About";
import Contact from "./components/Page/Contact";

function App() {
  const [currentPage, setCurrentPage] = React.useState("About");

  const renderPage = () => {
    if (currentPage === "Contact") {
      return <Contact />;
    }
    if (currentPage === "About") {
      return <About />;
    }
    if (currentPage === "Projects") {
      return <Project />;
    }
  };
  return (
    <div className="App">
      <Header setCurrentPage={setCurrentPage} />
      {renderPage()}
      <Footer />
    </div>
  );
}

export default App;
