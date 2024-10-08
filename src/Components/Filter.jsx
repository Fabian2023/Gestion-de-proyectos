

// eslint-disable-next-line react/prop-types
function Filter({ setFilter }) {
  return (
    <select 
      className="w-full p-2 mb-4 border border-[#087e8b] rounded-xl" 
      onChange={(e) => setFilter(e.target.value)}
    >
      <option value="">Todos</option>
      <option value="activo">Activo</option>
      <option value="inactivo">Inactivo</option>
    </select>
  );
}

export default Filter;
