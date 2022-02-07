import React from 'react';
import img2 from "../img/icon-paper.svg"
import img3 from "../img/icon-rock.svg"
import img1 from "../img/icon-scissors.svg"


class Game2 extends React.Component {
    random = Math.floor(Math.random() * 3) + 1;
    h2 = ''


    render() { 
        if (this.props.modif == 'modifButton' && this.random == 3) {
            this.h2 = "YOU LOSE"
        }
        if (this.props.modif == 'modifButton' && this.random == 2) {
            this.h2 = "YOU WIN"
        }
        if (this.props.modif == 'modifButton' && this.random == 1) {
            this.h2 = "DRAW"
        }
        if (this.props.modif == 'modifButton2' && this.random == 2) {
            this.h2 = "DRAW"
        }
        if (this.props.modif == 'modifButton2' && this.random == 3) {
            this.h2 = "YOU WIN"
        }
        if (this.props.modif == 'modifButton2' && this.random == 1) {
            this.h2 = "YOU LOSE"
        }
        if (this.props.modif == 'modifButton3' && this.random == 1) {
            this.h2 = "YOU WIN"
        }
        if (this.props.modif == 'modifButton3' && this.random == 2) {
            this.h2 = "YOU LOSE"
        }
        if (this.props.modif == 'modifButton3' && this.random == 3) {
            this.h2 = "DRAW"
        }
        
        
        return (
        <div>

            <div className="d-flex ">
                <div className="col-4 text-end">
                    <p className="actionT">YOU PICKED</p>
                </div>
                <div className="col-4 text-center">
                    <h2 className="mt-1 text-white">{this.h2}</h2>
                </div>
                <div className="col-4 text-start">
                    <p className="actionT2">THE HOUSE PICKED</p>
                </div>
            </div>

            <div className="d-flex">
                    <div className="col-4 colModif3">
                        <button className={this.props.modif}>
                            <img className="tailleImg2 img-fluid" src={this.props.image} alt="" />
                        </button>
                    </div>
                    <div className="col-4 text-center mt-5"><button onClick={()=> this.props.af(false, undefined, undefined)}  className="buttonPagain">PLAY AGAIN</button></div>
                    <div className="col-4 colModif4">
                        {this.random === 1 &&

                        <button className="modifButton">
                            <img className="tailleImg1  img-fluid" src={img1} alt="" />
                        </button> 
                        
                        }
                        {this.random === 2 && 
                        
                        <button className="modifButton2">
                            <img className="tailleImg1  img-fluid" src={img2} alt="" />
                        </button> 
                    
                        }

                        {this.random === 3 && 
                
                        <button className="modifButton3">
                            <img className="tailleImg1  img-fluid" src={img3} alt="" />
                        </button> 
                    
                        }
                        
                    </div>
                </div>
        </div>
        );
    }


}

export default Game2;