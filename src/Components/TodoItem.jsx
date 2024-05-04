import PropTypes from "prop-types";
import Item from "./Item";
function TodoItem({ itemsData, onDeleteClick }) {
  return (
    <div>
      {itemsData.map((item) => (
        <Item
          key={item.name}
          name={item.name}
          dueDate={item.dueDate}
          onDeleteClick={onDeleteClick}
        ></Item>
      ))}
    </div>
  );
}
TodoItem.propTypes = {
  itemsData: PropTypes.array.isRequired,
  onDeleteClick: PropTypes.func.isRequired,
};
export default TodoItem;
