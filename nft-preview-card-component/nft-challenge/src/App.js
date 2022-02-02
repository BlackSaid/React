import React from 'react';
import Card from './Card';
import imgNFT from './img/image-equilibrium.jpg';
import imgLeague from './img/League.jpeg';


class App extends React.Component {
  render() {
    return (
    <div className="container-fluid d-flex justify-content-between align-items-center bg-primary px-5">
      <Card 
      titre="Equilibirum #3429"
      source = {imgNFT}
      />

      <Card 
      titre="LES PROPS"
      source = {imgNFT}
      />

      {/* Il est possible de dupliquer les card de cette manière  */}

      <Card 
      titre="C EST DE LA"
      source = {imgNFT}
    
      />
      <Card 
      titre="FRAPPE"
      source = {imgLeague}
      />

      <Card 
      titre="EH MERCEEEEE !!!!!!!!!!!!"
      source = {imgNFT}
      />

    </div>
    )
  }
}

export default App;
