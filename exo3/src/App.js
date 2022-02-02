import React from 'react';

let date = new Date();
let annee = date.getFullYear();
let mois = date.getMonth();
let jour = date.getDate();
let heure = date.getHours();
let minutes = date.getMinutes();

class App extends React.Component {
  render() {
    return(
      <div>
        <h1>Exercice afficher la date</h1>
        <h3>{jour} / {mois} / {annee}</h3> 
        <h3>il est {heure}:{minutes}</h3>
      </div>
    )
  }
}



export default App;
