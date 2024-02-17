import React, { Component } from 'react';
import './App.css';
import TaskList from './Tasklist';
import AddTaskComponent from './AddTask'; // Poprawiam na AddTaskComponent


class App extends Component {
  state = {
    tasks: [
      {
        id: 0,
        text: "Wyrzucić ziemniaki",
        date: "2024-03-01",
        important: true,
        active: true,
        finishDate: null
      },
      {
        id: 1,
        text: "Kupić ziemniaki",
        date: "2024-03-01",
        important: true,
        active: true,
        finishDate: null
      },
      {
        id: 2,
        text: "Obrać ziemniaki",
        date: "2024-03-01",
        important: true,
        active: true,
        finishDate: null
      },
      // {}, // Ten pusty obiekt sprawiał problem, możesz go usunąć
    ],
  }

  render() {
    return (
      <div className="App">
        TODO App
        <AddTaskComponent /> {/* Poprawiam na AddTaskComponent */}
        <TaskList />
      </div>
    );
  }
}

export default App;
