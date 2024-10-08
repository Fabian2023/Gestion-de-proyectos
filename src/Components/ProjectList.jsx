/* eslint-disable react/prop-types */
import TaskList from "./TaskList";
import TaskForm from "./TaskForm";

// eslint-disable-next-line react/prop-types
function ProjectList({ projects, editProject, deleteProject }) {
  return (
    <div>
      {projects.map((project) => {
        // Calcular estadísticas de las tareas
        const taskStatusCount = project.tasks.reduce(
          (acc, task) => {
            acc[task.status] += 1;
            return acc;
          },
          { pendiente: 0, "en progreso": 0, completada: 0 }
        );

        return (
          <div key={project.id} className="border bg-[#bfd7ea] shadow-sm shadow-[#0b3954] p-4 mb-4 rounded-lg">
            <h2 className="text-xl font-semibold">{project.name}</h2>
            <p className="text-gray-600">{project.description}</p>

            {/* Mostrar estadísticas de las tareas */} 
            <div className="mt-4">
              <h3 className="font-bold mb-2">Estadísticas de Tareas:</h3>
              <ul>
                <li>Pendientes: {taskStatusCount.pendiente}</li>
                <li>En progreso: {taskStatusCount["en progreso"]}</li>
                <li>Completadas: {taskStatusCount.completada}</li>
              </ul>
            </div>

            {/* Formulario para agregar tareas */}
            <TaskForm project={project} editProject={editProject} />

            {/* Lista de tareas */}
            <TaskList project={project} editProject={editProject} />

            <button 
              onClick={() => deleteProject(project.id)} 
              className="bg-[#ff5a5f] text-white px-4 py-2 rounded-xl mt-2 hover:bg-[#c81d25] transition-colors duration-300"
            >
              Eliminar Proyecto
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default ProjectList;
