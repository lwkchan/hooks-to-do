import React from "react";

const ToDoItem = ({ toDo, markDone, remove }) => {
  return (
    <li
      style={{
        textDecoration: toDo.done ? "line-through" : ""
      }}
    >
      {toDo.description}
      {!toDo.done && (
        <button
          onClick={() => {
            markDone(toDo);
          }}
        >
          Done
        </button>
      )}
      {toDo.done && (
        <button
          onClick={() => {
            remove(toDo);
          }}
        >
          Remove
        </button>
      )}
    </li>
  );
};

export default ToDoItem;
