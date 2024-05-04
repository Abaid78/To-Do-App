import AppName from "./Components/AppName";
import AddTodo from "./Components/AddTodo";
import TodoItem from "./Components/TodoItem";
import Message from "./Components/Message";
import "./App.css";
import { useState } from "react";
function App() {
  const [itemsData, setItemsData] = useState([]);
  console.log(itemsData.length, "itemsDataLenght");
  const AddNewItem = (name, date) => {
    let newItemsData = [...itemsData, { name: name, dueDate: date }];
    setItemsData(newItemsData);
  };
  function handleDeleteItem(itemName) {
    console.log(itemName, "itemname");
    const newTodoItems = itemsData.filter((item) => item.name !== itemName);
    setItemsData(newTodoItems);
  }

  return (
    <center>
      <AppName></AppName>
      <AddTodo onNewItem={AddNewItem}></AddTodo>
      {itemsData.length === 0 && <Message></Message>}
      <TodoItem
        itemsData={itemsData}
        onDeleteClick={handleDeleteItem}
      ></TodoItem>
    </center>
  );
}
export default App;
