import React from 'react';

const ProfExampleWorkouts = (props) => {
  const { exampleWorkouts } = props;
  
  if (exampleWorkouts === "fbwA") {
    return (
      <ul style={style}>
        <li>Przysiad ze sztangą na karku</li>
        <li>Martwy ciąg</li>
        <li>Wyciskanie sztangi leżąc</li>
        <li>Wyciskanie żołnierskie</li>
        <li>Francuskie wyciskanie sztangi łamanej</li>
        <li>Uginanie przedramion ze sztangą prostą stojąc</li>
        <li>Przyciąganie kolan do brzucha w zwisie na drążku</li>
      </ul>
    );
  } else if (exampleWorkouts === "fbwB") {
    return (
      <ul style={style}>
        <li>Martwy ciąg na lekko ugiętych nogach</li>
        <li>Wiosłowanie sztangą nachwytem w opadzie tułowia</li>
        <li>Wyciskanie hantli leżąc na ławce poziomej/dodatniej lub ujemnej</li>
        <li>Wyciskanie hantli na przemian stojąc</li>
        <li>Wyciskanie sztangi wąskim chwytem leżąc na ławce poziomej</li>
        <li>Uginanie przedramion z hantlami chwytem neutralnym</li>
        <li>Skłony tułowia leżąc z piłką lekarską trzymaną przy klatce piersiowej</li>
        <li></li>
      </ul>
    );
  } 
  else if (exampleWorkouts === "fbwC") {
    return (
      <ul style={style}>
        <li>Wykroki ze sztangą na karku</li>
        <li>Podciąganie na drążku nachwytem</li>
        <li>Rozpiętki na ławce poziomej lub dodatniej</li>
        <li>Wyciskanie sztangi zza karku siedząc lub stojąc</li>
        <li>Wyciskanie hantla zza głowy oburącz/jednorącz stojąc lub siedząc</li>
        <li>Ugnanie przedramion z hantlami na przemian z suplinacją</li>
        <li>Skłony brzucha przy użyciu linek wyciągu górnego stojąc lub klęcząc</li>
      </ul>
    );
  } 
  return (
    <div style={style}>
    
    </div>
  );
}

const style = {
  color: 'white',
  fontSize: '35px',
}
export default ProfExampleWorkouts;
