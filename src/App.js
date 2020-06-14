import React, { Component } from "react";
import Items from "./Component/Dotolist";
import ToDoItem from "./Component/TodoItem";

class App extends Component {
  constructor() {
    super();
    this.state = {
      Items,
    };
    this.handleCheck = this.handleCheck.bind(this);
  }
  handleCheck(id) {
    this.setState((prevState) => {
      const updateItem = prevState.Items.map((item) => {
        if (item.id === id) {
          item.completed = !item.completed;
        }
        return item;
      });
      return {
        Items: updateItem,
      };
    });
  }
  render() {
    const todoItems = this.state.Items.map((item) => (
      <ToDoItem
        key={item.id}
        item={item}
        handleCheck={this.handleCheck}
        
      />
    ));
    return <div>{todoItems}</div>;
  }
}
export default App;
