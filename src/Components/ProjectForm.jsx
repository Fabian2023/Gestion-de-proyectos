import  { useState } from "react";

// eslint-disable-next-line react/prop-types
function ProjectForm({ addProject }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) return alert("El nombre del proyecto es obligatorio");
    const newProject = {
      id: Date.now(),
      name,
      description,
      status: "activo",
      tasks: [],
    };
    addProject(newProject);
    setName("");
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4 p-4 border border-[#b4d0e7] bg-[#bfd7ea] shadow-sm shadow-[#0b3954] rounded-lg">
      <div className="mb-2">
        <input
          type="text"
          placeholder="Nombre del proyecto"
          className="w-full p-2 border border-[#087e8b] rounded-xl"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="mb-2">
        <input
          type="text"
          placeholder="Descripción"
          className="w-full p-2 border border-[#087e8b] rounded-xl"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <button 
  type="submit" 
  className="bg-[#0b3954] text-white px-4 py-2 rounded-xl hover:bg-[#087e8b] transition-colors duration-300"
>
  Agregar Proyecto
</button>

    </form>
  );
}

export default ProjectForm;
