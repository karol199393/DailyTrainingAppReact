import React, { Component } from 'react';
import './AddTask.css';
class AddTask extends Component {


  minDate = new Date().toISOString().slice(0, 10);
  state = {
    muscleGroup: '',
    text: '',
    text4: '',
    text2: '',
    text3: '',
    date: this.minDate
  }

  handleTextNameExercies = (e) => {
    this.setState({
      text: e.target.value
    })
  }

  handleTextWeight = (e) => {
    this.setState({
      text4: e.target.value
    })
  }

  handleTextCountExercises = (e) => {
    this.setState({
      text2: e.target.value
    })
  }

  handleTextCountExercises2 = (e) => {
    this.setState({
      text3: e.target.value
    })
  }

  handleMuscleGroup = (e) => {
    this.setState({
      muscleGroup: e.target.value
    })
  }

  handleDate = (e) => {
    this.setState({
      date: e.target.value
    })
  }

  handleClick = () => {
    console.log("dodaj");

    const { muscleGroup,text,text4,text2,text3,date } = this.state;
    if (text.length > 2) {
      const add = this.props.add(muscleGroup,text,text4,text2,text3, date);
      if (add) {
        this.setState({
          muscleGroup: '',
          text: '',
          text4: '',
          text2: '',
          text3: '',
          date: this.minDate
        })
      }
    } else {
      console.log("za malo liter");
    }
  }

  render() {
    let maxDate = this.minDate.slice(0, 4) * 1 + 1;
    // console.log(maxDate);
    maxDate = maxDate + "-12-31";

    return (
      <div className="form">
        <label htmlFor="muscleGroup" style={style}>PARTIA MIĘŚNIOWA</label>
        <br />
        <select id="muscleGroup" style={styleCheckbox} value={this.state.muscleGroup} onChange={this.handleMuscleGroup }>
        <option value="brak">Wybierz partie</option>
        <option value="klatka piersiowa">Klatka piersiowa</option>  
        <option value="biceps">Biceps</option>
        <option value="brzuch">Brzuch</option>
        <option value="nogi">Nogi</option>
        <option value="triceps">Triceps</option>
        </select>
        <br />
        <input type="text" placeholder="Dodaj ćwiczenie" value={this.state.text} onChange={this.handleTextNameExercies} /> <br />
        <input type="text" placeholder="Obciążenie w kg" value={this.state.text4} onChange={this.handleTextWeight} /> <br />
        <input type="text" placeholder="Ilość serii" value={this.state.text2} onChange={this.handleTextCountExercises} /> <br />
        <input type="text" placeholder="Ilość powtórzeń" value={this.state.text3} onChange={this.handleTextCountExercises2} /> <br />
        <label htmlFor="date">Data</label>
        <input type="date" value={this.state.date} min={this.minDate} max={maxDate} onChange={this.handleDate} />
        <br />
        <button onClick={this.handleClick}>Dodaj</button>
      </div>
    );
  }
}

const style = {
  color: 'white',
  FontFace: 'Times New Roman',
  fontSize: '28px',
  textAlign: 'center',
} 
const styleCheckbox = {
  color: 'black',
  height: '36px',
  width: '270px',
  fontSize: '30px',
 }


export default AddTask;