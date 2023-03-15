import React from "react";

const styles = {
  bodyStyle: {
    background: "#FDFAF6",
  },
};

// const renderProjects = (projects) {

// }

export default function Project() {
  console.log("Project page");
  return (
    <div className="container">
      <h2>Projects</h2>
      <div className="row">
        {projectArray.map((project, index) => (
          <div key={project.id} className="col-6">
            <div className="card" style={{ width: "18rem" }}>
              <div className="card-body">
                <h5 className="card-title">{project.title}</h5>
                <p className="card-text">{project.description}</p>
                <a href={project.github} className="btn btn-primary">
                  Github
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const projectArray = [
  {
    id: "1",
    title: "Did I take That?!",
    github: "https://github.com/Carter-Schmitz/Did_I_Take_That-",
    description:
      "An application that takes the user's medication and lets them know if the user has taken their medication.",
  },
  {
    id: "2",
    title: "Zoo Search",
    github: "https://github.com/anthonynguyen-dev/zoo-search",
    description:
      "Lets the user look up zoos that are near the user's location.",
  },
  {
    id: "3",
    title: "E-Commerce Back End",
    github: "https://github.com/anthonynguyen-dev/ecommerce-back-end",
    description: "",
  },
  {
    id: "4",
    title: "PWA Text Editor",
    github: "https://github.com/anthonynguyen-dev/JATE-text-editor",
    description: "This application lets the user create text and edit it.",
  },
  {
    id: "5",
    title: "NoSQL Social Network Api",
    github: "https://github.com/anthonynguyen-dev/noSQL-Social-Network",
    description: "",
  },
  {
    id: "6",
    title: "Employee Generator",
    github: "https://github.com/anthonynguyen-dev/employee-generator",
    description:
      "An application that is able to let the user generate employees.",
  },
  {
    id: "7",
    title: "Password Generator",
    github: "https://github.com/anthonynguyen-dev/password-generator",
    description:
      "An application that lets the user generate a password with any amount of characters.",
  },
  {
    id: "8",
    title: "Note Taker App",
    github: "https://github.com/anthonynguyen-dev/note-taker-app",
    description:
      "An application that lets the user take notes, edit them, and delete them",
  },
];
