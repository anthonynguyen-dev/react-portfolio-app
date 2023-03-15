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
    title: "Did I take That?!",
    github: "https://github.com/Carter-Schmitz/Did_I_Take_That-",
    description:
      "An application that takes the user's medication and lets them know if the user has taken their medication.",
  },
  {
    title: "Zoo Search",
    github: "https://github.com/anthonynguyen-dev/zoo-search",
    description:
      "Lets the user look up zoos that are near the user's location.",
  },
  {
    title: "E-Commerce Back End",
    github: "https://github.com/anthonynguyen-dev/ecommerce-back-end",
    description: "",
  },
  {
    title: "PWA Text Editor",
    github: "https://github.com/anthonynguyen-dev/JATE-text-editor",
    description: "This application lets the user create text and edit it.",
  },
  {
    title: "NoSQL Social Network Api",
    github: "https://github.com/anthonynguyen-dev/noSQL-Social-Network",
    description: "",
  },
  {
    title: "Employee Generator",
    github: "https://github.com/anthonynguyen-dev/employee-generator",
    description:
      "An application that is able to let the user generate employees.",
  },
  {
    title: "Password Generator",
    github: "https://github.com/anthonynguyen-dev/password-generator",
    description:
      "An application that lets the user generate a password with any amount of characters.",
  },
  {
    title: "Note Taker App",
    github: "https://github.com/anthonynguyen-dev/note-taker-app",
    description: "",
  },
];
