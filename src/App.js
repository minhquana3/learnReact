import AddAnItem from "./AddAnItem";
import ToDoList from "./ToDoList";
import React, {useState} from 'react';
function App() {
  const [list, setList] = useState(['Item1','Item2'])

  const handleAddItem = (value) => {
    setList([...list, value]);
  }
  return (
    <div>
      <AddAnItem onAddItem={handleAddItem}/>
      <ToDoList listItem={list} />
    </div>
  );
}

export default App;
