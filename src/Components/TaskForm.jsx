/* eslint-disable react/prop-types */
import  { useState } from "react";

function TaskForm({ project, editProject }) {
  const [taskName, setTaskName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!taskName) return alert("El nombre de la tarea es obligatorio");
    
    const newTask = {
      id: Date.now(),
      name: taskName,
      description: taskDescription,
      status: "pendiente",
    };

    const updatedProject = {
      ...project,
      tasks: [...project.tasks, newTask],
    };

    editProject(updatedProject);
    setTaskName("");
    setTaskDescription("");
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4">
      <div className="mb-2">
        <input
          type="text"
          placeholder="Nombre de la tarea"
          className="w-full p-2 border border-[#0b3954]  rounded-xl"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
        />
      </div>
      <div className="mb-2">
        <input
          type="text"
          placeholder="Descripción de la tarea"
          className="w-full p-2 border border-[#0b3954]  rounded-xl"
          value={taskDescription}
          onChange={(e) => setTaskDescription(e.target.value)}
        />
      </div>
      <button type="submit" className="bg-[#0b3954] text-white px-4 py-2 rounded-xl hover:bg-[#087e8b] transition-colors duration-300">
        Agregar Tarea
      </button>
    </form>
  );
}

export default TaskForm;
