import React from "react";
import Header from './Header'
import Corps from "./Corps"
import Game2 from "./Game2"
import img2 from "../img/icon-paper.svg"
import img3 from "../img/icon-rock.svg"
import img1 from "../img/icon-scissors.svg"




class Jeu extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            affichage: false, 
            color: '',
            image: '',
            score: 0,
            
        }
        console.log(this.state);
    }
    updateToScore = (e)=>{}
    
    change =(x, c, z)=>{this.setState({affichage: x, color: c, image: z})}
    render() { 
        return (
            <div className="bgAll ">
                <div className="container d-flex justify-content-center">
                <Header 
                score = {this.state.score}
                />
                </div>
                {this.state.affichage === false &&  
                <div>
                    <div>
                        <Corps 
                            appelAfichage={this.change}
                        />
                    </div>
                </div>
                }
                {this.state.affichage === true && 
                <div>
                    <div>
                    <Game2
                    updateToScore = {this.updateToScore}
                    modif = {this.state.color}
                    image = {this.state.image}
                    af = {this.change}
                    />
                    </div>
                </div>
                }
            </div>
        );
    }
}

export default Jeu;