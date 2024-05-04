import PropTypes from "prop-types";
function Item({ name, dueDate, onDeleteClick }) {
  return (
    <div className="todo_item">
      <div>{name}</div>
      <div>{dueDate}</div>
      <div>
        <button
          type="button"
          className="delete_btn"
          onClick={() => onDeleteClick(name)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
Item.propTypes = {
  name: PropTypes.string.isRequired,
  dueDate: PropTypes.string.isRequired,
  onDeleteClick: PropTypes.func.isRequired,
};
export default Item;
