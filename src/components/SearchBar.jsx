const SearchBar = ({ onSearchChange }) => {
  const handleOnChange = (e) => {
    const userInput = e.target.value;
    onSearchChange(userInput); 
  };

  return (
    <div>
      <input
        placeholder="Make your search..."
        type="text"
        onChange={handleOnChange}
      ></input>
    </div>
  );
};

export default SearchBar;
