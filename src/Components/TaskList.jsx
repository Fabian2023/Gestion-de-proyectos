import  { useState, useEffect } from "react";

// eslint-disable-next-line react/prop-types
function TaskList({ project, editProject }) {
  // Mantener un estado local para las tareas
  // eslint-disable-next-line react/prop-types
  const [localTasks, setLocalTasks] = useState(project.tasks);

  // Sincronizar las tareas locales con las del proyecto cuando el componente se monte
  useEffect(() => {
    // eslint-disable-next-line react/prop-types
    setLocalTasks(project.tasks);
  // eslint-disable-next-line react/prop-types
  }, [project.tasks]);

  // Función para cambiar el estado de una tarea localmente y en el proyecto
  const updateTaskStatus = (taskId, newStatus) => {
    // Actualizar las tareas en el estado local
    const updatedTasks = localTasks.map((task) =>
      task.id === taskId ? { ...task, status: newStatus } : task
    );

    setLocalTasks(updatedTasks); // Actualizar el estado local

    // Actualizar el proyecto globalmente
    const updatedProject = {
      ...project,
      tasks: updatedTasks,
    };

    editProject(updatedProject); // Actualizar el proyecto en el estado global
  };

  return (
    <div className="mt-4">
      <h3 className="font-bold">Tareas:</h3>
      <ul className="list-disc pl-5">
        {localTasks.map((task) => (
          <li key={task.id} className="mb-2">
            <div className="flex justify-between items-center">
              <span>{task.name}</span>
              <span className="capitalize text-gray-500">{task.status}</span>
              
              {/* Selector para cambiar el estado de la tarea */}
              <select
                className="ml-4 border p-2 rounded-lg"
                value={task.status}
                onChange={(e) => updateTaskStatus(task.id, e.target.value)}
              >
                <option value="pendiente">Pendiente</option>
                <option value="en progreso">En Progreso</option>
                <option value="completada">Completada</option>
              </select>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
