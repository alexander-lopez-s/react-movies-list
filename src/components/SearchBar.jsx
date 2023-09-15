import { useState } from "react";
const SearchBar = ({ onSearchChange }) => {

const [input, setInput] = useState('');
const handleOnChange = (e) => {
    setInput(e.target.value.toString());
    onSearchChange(input)
}
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
