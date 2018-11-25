import React from "react";

const ToDoForm = ({ add, setToDoToAdd, toDoToAdd }) => {
  return (
    <div className="to-do-form">
      <h2>Add To-do:</h2>
      <form
        onSubmit={e => {
          e.preventDefault();
          add(toDoToAdd);
          setToDoToAdd("");
        }}
      >
        <input
          type="text"
          value={toDoToAdd}
          onChange={e => setToDoToAdd(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ToDoForm;
