// import React from 'react';
// import './App.css';

// test 
// class App extends React.Component {
  
  //   render(){
    //     return (
      //       <div>
      //         <h1>Eh mercee</h1>
      //         <p>je peux insérer autant de text que je veux c'est trop bien</p>
      
      //       </div>
      //     )
      //   }
      // }
      
      // export default App;
      
import React from 'react';
// import logo from './logo.svg';
// import './App.css';


function App() {
  
  let date = new Date()
  
  let tempJavascript = date.getTime();

  let tempPHP = tempJavascript/1000;

  return (
    <div>
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className='App-logo' alt='logo' /> */}
          <h1>Text</h1>
          <p>On voit comment afficher l'heure de différente manière</p>
          <p> 
            Temps JavaScript: {tempJavascript} milleseconde
            {/* Temps Php: {tempsJavascript/1000} seconds */}
          </p>
          <p> 
            Temps Php: {tempPHP/1000} seconds
          </p>
        </header>
      </div>
      <footer>On va ceperrrrr !!!</footer>
    </div>

// getDate() : nous donne le jour du mois
// getMonth() : nous donne le mois
// getFullYear() : nous donne l’année


  );

}


export default App;


