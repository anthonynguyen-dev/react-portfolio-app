import React from "react";

const styles = {
  bodyStyle: {
    background: "#FDFAF6",
  },
};

export default function Project() {
  return (
    <div className="container">
      <h2>Projects</h2>
      <ul>
        {projectArray.map((project) => (
          <li></li>
        ))}
      </ul>
    </div>
  );
}

const projectArray = [
  {
    title: "",
    github: "",
    description: "",
  },
  {},
];
