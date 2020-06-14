import React from "react";
const ToDoItem = (props) => {
  const completeItem = {
    textDecoration: "line-through",
    color: "cdcdcd",
    fontStyle: "italic",
    backgroundColor: "red",
  };
  return (
    <div className="item">
      <input
        type="checkbox"
        onChange={() => props.handleCheck(props.item.id)}
        checked={props.item.completed}
      />
      <p style={props.item.completed ? completeItem : null}>
        {props.item.Task}
      </p>
    </div>
  );
};

export default ToDoItem;
