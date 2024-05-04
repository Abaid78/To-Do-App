import PropTypes from "prop-types";
import { useState } from "react";
function AddTodo({ onNewItem }) {
  let [name, setName] = useState();
  let [date, setDate] = useState();
  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleDateChange = (event) => {
    setDate(event.target.value);
  };
  const handleAddButtonClicked = () => {
    onNewItem(name, date);
    setName();
    setDate();
  };
  return (
    <div className="add_todo">
      <div>
        <input
          value={name}
          type="text"
          placeholder="Enter To DO Items"
          onChange={(event) => {
            handleNameChange(event);
          }}
        />
      </div>
      <div>
        <input value={date} type="date" onChange={handleDateChange} />
      </div>
      <div>
        <button
          type="button"
          className="add_btn"
          onClick={() => handleAddButtonClicked()}
        >
          Add
        </button>
      </div>
    </div>
  );
}
AddTodo.propTypes = {
  onNewItem: PropTypes.func.isRequired,
};
export default AddTodo;
