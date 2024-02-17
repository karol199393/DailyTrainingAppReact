import React, { Component } from "react";
import TaskList from "./Tasklist";
import AddTask from "./AddTask"; 

class AddTaskComponent extends Component {
  render() {
    return (
      <div className="App">
        TODO App
        <AddTask />
        <TaskList />
      </div>
    );
  }
}

export default AddTaskComponent; // Poprawiam na AddTaskComponent
