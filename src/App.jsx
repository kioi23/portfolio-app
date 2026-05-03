import { useState } from "react";
import Navbar from "./components/Navbar";
import ProjectList from "./components/ProjectList";
import AddProjectForm from "./components/AddProjectForm";
import SearchBar from "./components/SearchBar";
import "./App.css";

function App() {
  // STATE (centralized)
  const [projects, setProjects] = useState([
    { id: 1, title: "Portfolio Website", description: "My personal site" },
    { id: 2, title: "E-commerce App", description: "Online store" },
  ]);

  const [search, setSearch] = useState("");

  // EVENT: Add Project
  const addProject = (newProject) => {
    setProjects([...projects, { ...newProject, id: Date.now() }]);
  };

  // FILTER (derived state)
  const filteredProjects = projects.filter((project) =>
    project.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <Navbar />

      <SearchBar search={search} setSearch={setSearch} />

      <AddProjectForm addProject={addProject} />

      <ProjectList projects={filteredProjects} />
    </div>
  );
}

export default App;
