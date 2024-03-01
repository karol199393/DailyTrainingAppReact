import React from 'react';
import './Task.css';

const Task = (props) => {

  const style = {
    color: 'white',
    FontFace: 'Times New Roman',
    fontSize: '30px',

  }

  const style2 = {
    color: 'yellow',
    FontFace: 'Arial',
    fontSize: '26px',

  }

  const stylebutton = {
    fontSize: '27px',
    color: 'white',
    backgroundColor: 'gray',
    borderRadius: '5px',
    padding: '5px 10px',
    margin: '5px',
    cursor: 'pointer',
  }
  const stylebuttonx = {
    fontSize: '27px',
  }

  const finishstyle = {
    color: 'white',
    fontSize: '25px',

  }
  

  const { musclegroup,text,text4,text2,text3, date, id, active,finishDate } = props.task;

  if (active) {
    return (
      <div>
        <p>
         
          <span style={style} >Partia ciała:<span style={style2}>{musclegroup}</span> Cwiczenie:<span style={style2}>{text}</span>Obciążenie:<span style={style2}>{text4}</span> Ilość serii: <span style={style2}>{text2}</span> Ilość powtórzeń <span style={style2}>{text3}</span> <span>{date} </span></span>
          <button style={stylebutton} onClick={() => props.change(id)}>Już zrobione</button>
          <button style={stylebuttonx} onClick={() => props.delete(id)}>X</button>
        </p>

      </div>
    );
  } else {

    const finish = new Date(finishDate).toLocaleString()
    return (
      <div>

        <p style={finishstyle}>
          <strong>{text}</strong><em> </em><br />
          Zrobione dnia <span> {finish}</span>

          <button onClick={() => props.delete(id)}>X</button>
        </p>
      </div>
    )
  }
}

export default Task;