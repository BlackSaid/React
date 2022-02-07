import React from 'react';
import TimeCard from './component/TimeCard';
import ProfileCard from './component/ProfileCard';
import imgJeremy from './images/image-jeremy.png';
import imgLogo from './images/icon-work.svg';
import imgPlay from './images/icon-play.svg';
import imgStudy from './images/icon-study.svg';
import imgExo from './images/icon-exercise.svg';
import imgSelf from './images/icon-self-care.svg'
import imgSocial from './images/icon-social.svg'
import datajson from './data.json';
console.log(datajson);

class App extends React.Component {
  

  constructor(props) {
    super(props);
    this.state = {
      valeur: 'daily'
    }
    this.modifValeur = this.modifValeur.bind(this) 
  }
  
  modifValeur(element) {
    
    this.setState({valeur: element})

    console.log(this.state.valeur);
  }


  render() { 
    return (
      <div className="d-flex align-items-center containerDzeub ">

      <div className="container"> 
        <div className="row">
          <div className="col-lg-3 col-12">
            <ProfileCard
              source= {imgJeremy}
              modif = {this.modifValeur}
              
              />
          </div>
          
          <div className="col-lg-3 col-12">
            <TimeCard 
            logo = {imgLogo}
            backgroundColor =  "hsl(15, 100%, 70%)"
            titre = {datajson[0].title}
            style = "hsl(15, 100%, 70%)"
            heure = {datajson[0].timeframes[this.state.valeur].current}
            hour = {datajson[0].timeframes[this.state.valeur].previous}
            />
            
            <TimeCard 
            logo = {imgExo}
            backgroundColor = "hsl(145, 58%, 55%)"
            titre = {datajson[3].title}
            style="hsl(145, 58%, 55%)"
            heure = {datajson[3].timeframes[this.state.valeur].current}
            hour = {datajson[3].timeframes[this.state.valeur].previous}
            />
            </div>

          <div className="col-lg-3 col-12">
            <TimeCard 
            logo = {imgPlay}
            titre = {datajson[1].title}
            backgroundColor = "hsl(195, 74%, 62%)"
            style="hsl(195, 74%, 62%)"
            heure = {datajson[1].timeframes[this.state.valeur].current}
            hour = {datajson[1].timeframes[this.state.valeur].previous}
            />

            <TimeCard 
            titre = {datajson[4].title}
            logo = {imgSocial}
            backgroundColor = "hsl(264, 64%, 52%)"
            style = "hsl(264, 64%, 52%)"
            heure = {datajson[4].timeframes[this.state.valeur].current}
            hour = {datajson[4].timeframes[this.state.valeur].previous}
            />


            </div>

          <div className="col-lg-3 col-12">
            <TimeCard 
            titre = {datajson[2].title}
            logo = {imgStudy}
            backgroundColor = "hsl(348, 100%, 68%)"
            style = "hsl(348, 100%, 68%)"
            heure = {datajson[2].timeframes[this.state.valeur].current}
            hour = {datajson[2].timeframes[this.state.valeur].previous}
            />

            <TimeCard 
            titre = {datajson[5].title}
            logo = {imgSelf}
            backgroundColor = "hsl(43, 84%, 65%)"
            style = "hsl(43, 84%, 65%)"
            heure = {datajson[5].timeframes[this.state.valeur].current}
            hour = {datajson[5].timeframes[this.state.valeur].previous}
            />
            
            
            
            </div>
          
        </div>
      
        </div>
      </div>
    );
  }
}





export default App;
