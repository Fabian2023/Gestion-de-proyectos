import { useState, useEffect } from "react";
import ProjectList from "./Components/ProjectList";
import ProjectForm from "./Components/ProjectForm";
import SearchBar from "./Components/SearchBar";
import Filter from "./Components/Filter";
import './App.css';

function App() {
  const [projects, setProjects] = useState([]);

  const [filter, setFilter] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  // Cargar proyectos desde localStorage cuando el componente se monta
  useEffect(() => {
    const storedProjects = localStorage.getItem("projects");
    if (storedProjects) {
      setProjects(JSON.parse(storedProjects));
    }
  }, []);

  // Guardar proyectos en localStorage cada vez que se actualizan
  useEffect(() => {
    if (projects.length > 0) {
      localStorage.setItem("projects", JSON.stringify(projects));
    }
  }, [projects]);

  const addProject = (project) => {
    setProjects([...projects, project]);
  };

  const editProject = (updatedProject) => {
    const updatedProjects = projects.map((project) =>
      project.id === updatedProject.id ? updatedProject : project
    );
    setProjects(updatedProjects);
  };

  const deleteProject = (id) => {
    setProjects(projects.filter((project) => project.id !== id));
  };

  const filteredProjects = projects.filter((project) => {
    return project.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
           (filter === "" || project.status === filter);
  });

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4 text-[#087e8b]">Gestión de Proyectos</h1>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <Filter setFilter={setFilter} />
      <ProjectForm addProject={addProject} />
      <ProjectList 
        projects={filteredProjects} 
        editProject={editProject} 
        deleteProject={deleteProject}
      />
    </div>
  );
}

export default App;
