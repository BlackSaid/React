import React from 'react'
import img1 from '../img/icon-scissors.svg'
import img2 from '../img/icon-paper.svg'
import img3 from '../img/icon-rock.svg'
import imgRules from '../img/image-rules.svg'
class Corps extends React.Component {
    
    render() { 
        return (
            <div className="bgCorps ">
                <div className="d-flex">
                    <div onClick={()=>{this.props.appelAfichage(true, 'modifButton2', img2)}} className="col-6 colModif2" >
                        <button className="modifButton2">
                            <img className="tailleImg2 img-fluid" src={img2} alt="" />
                        </button>
                    </div>
                    <div onClick={()=>{this.props.appelAfichage(true, 'modifButton', img1)}} className="col-6 colModif">
                        <button className="modifButton">
                            <img className="tailleImg1  img-fluid" src={img1} alt="" />
                        </button> 
                    </div>
                </div>
                <div onClick={()=>{this.props.appelAfichage(true, 'modifButton3', img3)}} className="text-center imgRock">
                    <button className="modifButton3">
                        <img className="tailleImgR img-fluid" src={img3} alt="" />
                    </button> 

                </div>
                
                <div className="text-end">

                    <button type="button" class="btn bordureBut" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        Rules
                    </button>


                    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="Rules" id="exampleModalLabel">Modal title</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body text-center">
                            <img src={imgRules} alt="" />
                        </div>
                        <div class="modal-footer">
                        <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Prêt !</button>
                        
                        </div>
                        </div>
                    </div>
                    </div>

                </div>
            </div>
            
        );
    }
}

export default Corps;