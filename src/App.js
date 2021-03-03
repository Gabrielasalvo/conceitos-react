import React from "react";
import Header from "./Header";
import api from "./services/api";

function App() {
  const [projects, setProjects] = React.useState([]);
  React.useEffect(() => {
    api.get("/projects").then((response) => {
      setProjects(response.data);
    });
  }, []);
  async function handleAddProject() {
    // setProjects([...projects, `Novo projeto ${Date.now()}`]);
    const response = await api.post("/projects", {
      title: "Frontend",
      owner: "Gabriela",
    });

    const project = response.data;

    setProjects([...projects, project]);
  }
  return (
    <div>
      <Header title="Homepage" />
      <header> Conteúdo</header>

      {projects.map((project) => (
        <li key={project.id}>{project.title}</li>
      ))}
      <button type="button" onClick={handleAddProject}>
        Adicionar Projeto
      </button>
    </div>
  );
}

export default App;
