import React, { useState } from "react";
import ToDoItem from "./components/ToDoItem";
import ToDoForm from "./components/ToDoForm";
import "./App.css";

const initialToDos = [
  { id: 1, description: "milk the cow", done: false },
  { id: 2, description: "feed the birds", done: false },
  { id: 3, description: "shear the sheep", done: false },
  { id: 4, description: "sew the seeds", done: false },
  { id: 5, description: "bake the break", done: false }
];

const App = () => {
  const [toDos, setToDos] = useState(initialToDos);
  const [toDoToAdd, setToDoToAdd] = useState("");

  const markDone = doneToDo =>
    setToDos(
      toDos.map(toDo =>
        doneToDo.id === toDo.id ? { ...doneToDo, done: true } : { ...toDo }
      )
    );

  const remove = toDo =>
    setToDos(toDos.filter(newToDo => newToDo.id !== toDo.id));

  const add = toDo => {
    // Ideally this would be generated server-side to guarantee non-duplications
    const id = toDos[toDos.length - 1].id + 1;
    setToDos([...toDos, { id, description: toDo, done: false }]);
  };

  return (
    <div className="App">
      <h1>To-dos</h1>
      <ul>
        {toDos.map(toDo => (
          <ToDoItem
            key={toDo.id}
            toDo={toDo}
            markDone={markDone}
            remove={remove}
          />
        ))}
      </ul>
      <ToDoForm add={add} setToDoToAdd={setToDoToAdd} toDoToAdd={toDoToAdd} />
    </div>
  );
};

export default App;
