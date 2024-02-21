import React, { Component } from 'react';
import AddTask from './AddTask';
import TaskList from './TaskList';
import './App.css';
import ExampleWorkouts from './ExampleWorkouts';



class App extends Component {
  counter = 9
  state = {
    tasks: [
      {
        id: 0,
        muscleGroup: 'klatka piersiowa',
        text: 'Wyciskanie na klatke na ławce prostej',
        text2: '4',
        text3: '2',
        date: '2018-02-15',
        active: true,
        finishDate: null
      },
      { id: 1, musclegroup: 'klatka piersiowa', text: "Wyciskanie na klatke na ławce poziomej",text2: '4', text3: '2', date: '2020-11-12',active: true, finishDate: null },
      { id: 2, musclegroup: 'biceps', text: "Przysiady ze sztangą",text2: '4', text3: '2', date: '2019-09-11',active: true, finishDate: null },
      { id: 3, musclegroup: 'brzuch', text: "Martwy ciąg",text2: '4', text3: '2', date: '2019-05-20',active: true, finishDate: null },
      { id: 4, musclegroup: 'nogi', text: "Wyciskanie żołnierskie",text2: '4', text3: '2', date: '2020-11-12', active: true, finishDate: null },
      { id: 5, musclegroup: 'triceps', text: "Wyciskanie hantli na ławce(barki)",text2: '4', text3: '2', date: '2019-09-11', active: true, finishDate: null },
      { id: 6, musclegroup: 'klatka piersiowa', text: "Rozpiętki z hantlami",text2: '4', text3: '2', date: '2019-05-20', active: true, finishDate: null },
      { id: 7, musclegroup: 'plecy', text: "Podciąganie sztangi(plecy)",text2: '4', text3: '2', date: '2020-11-12',active: true, finishDate: null },
      { id: 8, musclegroup: 'biceps', text: "Suplinacja z hantlami",text2: '4', text3: '2', date: '2019-09-11',active: true, finishDate: null },

    ]
  }

  deleteTask = (id) => {
    console.log("delete elementu o id " + id);
    // const tasks = [...this.state.tasks];
    // const index = tasks.findIndex(task => task.id === id);
    // tasks.splice(index, 1);
    // this.setState({
    //   tasks
    // })

    let tasks = [...this.state.tasks];
    tasks = tasks.filter(task => task.id !== id)
    this.setState({
      tasks
    })
  }

  changeTaskStatus = (id) => {
    console.log("change w stanie elementu o id " + id);
    const tasks = Array.from(this.state.tasks);
    tasks.forEach(task => {
      if (task.id === id) {
        task.active = false;
        task.finishDate = new Date().getTime()
      }
    })
    this.setState({
      tasks
    })
  }

  addTask = (musclegroup,text,text2,text3, date) => {
    // console.log("dodany obiekt");
    const task = {
      id: this.counter,
      musclegroup,
      text, // tekst z inputa
      text2, //tekst z inputa
      text3, //tekst z inputa
      date, //tekst z inputa
      active: true,
      finishDate: null
    }
    this.counter++
    console.log(task, this.counter);

    this.setState(prevState => ({
      tasks: [...prevState.tasks, task]
    }))


    return true
  }

  handleExercises = (e) => {
    this.setState({
      exampleExercises: e.target.value
    });
  }
  
  

  render() {
    return (
      <div className="mainContainer">
      <div className="App">
        <h1>Dziennik treningowy</h1>
        <AddTask add={this.addTask} />
        <div className="Tasklist">
        <TaskList tasks={this.state.tasks} delete={this.deleteTask} change={this.changeTaskStatus} />
        </div>
      </div>
      <div className="secondContainer">
      <h1>Przykładowe treningi</h1>
        <label htmlFor="exampleExercies" style={styleText}>POKAZ TRENING:</label>
        <select id="exampleExercies" style={styleCheckbox} value={this.state.exampleExercises} onChange={this.handleExercises }>
        <option value="brak">Wybierz trening</option>
        <option value="klatka piersiowa" >Klatka piersiowa</option>  
        <option value="biceps">Biceps</option>
        <option value="brzuch">Brzuch</option>
        <option value="nogi">Nogi</option>
        <option value="triceps">Triceps</option>
        </select>

        <div id="exampleWorkouts">
        <ExampleWorkouts style={styleEW} exampleExercises={this.state.exampleExercises} /> </div>
      </div>


      </div>
    );
  }
}
const styleCheckbox = {
  fontSize: '25px',
  color: 'white',
  height: '36px',
  width: '250px', }

const styleText = {
  
  color: 'white',
  FontFace: 'Times New Roman',
  fontSize: '24px',
  textAlign: 'center',
}  

const styleEW = {
  color: 'white',
  FontFace: 'Times New Roman',
  fontSize: '24px',
  textAlign: 'center',
}

export default App;
