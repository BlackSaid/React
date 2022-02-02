import React from 'react';
import iconEther from './img/icon-ethereum.svg'
import iconHeure from './img/icon-clock.svg'
import imgTete from './img/image-avatar.png'



class CardBody extends React.Component {
    render() {
        return (
            // <div className="container grosseBordure">
                <div className="card-body rounded-3">
                    <h3 className="text-white">{this.props.titre}</h3>

                    <p className="text-white tailleText">Our Equilibrium collement promotes  balance and calm.</p>
                    <div className="d-flex">
                        <div className="col-6 d-flex ">
                            <img className='img1 img-fluid' src={iconEther} alt="" />
                            <p className=" ms-2 couleurText">0.004 ETH</p>
                        </div>
                        <div className="col-6 d-flex">
                            <img className='img1 img-fluid' src={iconHeure} alt="" />
                            <p className='ms-1 couleurText2'>3 days left</p>
                        </div>
                    </div>
                    <hr />
                    <div className="d-flex tailleLast">
                        <img className='img2 img-fluid border' src={imgTete} alt="" />
                        <p className='couleurText3 ms-3'>Creation of <span id='couleurB' className='text-white'>Jules Wyvern</span></p>
                    </div>
                </div>
            // </div>
        )
    }
}

export default CardBody;