

// eslint-disable-next-line react/prop-types
function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <input
      type="text"
      placeholder="Buscar proyectos"
      className="w-full p-2 mb-4 border border-[#087e8b] rounded-xl"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
    />
  );
}

export default SearchBar;
