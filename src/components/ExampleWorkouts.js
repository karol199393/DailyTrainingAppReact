import React from 'react';

const ExampleWorkouts = (props) => {
  const { exampleExercises } = props;
  
  if (exampleExercises === "klatka piersiowa") {
    return (
      <ul style={style}>
        <li>Wyciskanie na klatke na ławce prostej (4 razy) (10 powtórzeń)</li>
        <li>Wyciskanie na klatke na ławce poziomej (4 razy) (10 powtórzeń)</li>
        <li>Rozpiętki z hantlami (4 razy) (10 powtórzeń)</li>
      </ul>
    );
  } else if (exampleExercises === "biceps") {
    return (
      <ul style={style}>
        <li>Przyciąganie sztangi (4 razy)(10 powtórzeń)</li>
        <li>Suplinacja z hantlami (4 razy)(10 powtórzeń)</li>
        <li>Modlitwenik(4 razy)(10 powtórzeń)</li>
      </ul>
    );
  } 
  else if (exampleExercises === "triceps") {
    return (
      <ul style={style}>
        <li>Wyciskanie wąsko sztangi (4 razy)(10 powtórzeń)</li>
        <li>Wyciskanie hantli nad głową (4 razy)(10 powtórzeń)</li>
        <li>Ściąganie na wyciągu (4 razy)(10 powtórzeń)</li>
      </ul>
    );
  } 
  else if (exampleExercises === "brzuch") {
    return (
      <ul style={style}>
        <li>Brzuszki ze skrętem tułowia</li>
        <li>Wspięcia górskie</li>
        <li>Brzuszki z wymachami</li>
      </ul>
    );
  } 
   else if (exampleExercises === "nogi") {
    return (
      <ul style={style}>
        <li>Przysiady ze sztangą (4 razy) (10 powtórzeń)</li>
        <li>Wykroki z hantlami (4 razy) (10 powtórzeń)</li>
        <li>Maszyna (4 razy) (10 powtórzeń)</li>
      </ul>
    );
  }

  return (
    <div style={style}>
      <p>Wybierz partie mięśniową</p>
    </div>
  );
}

const style = {
  color: 'white',
  fontSize: '35px',
}
export default ExampleWorkouts;
