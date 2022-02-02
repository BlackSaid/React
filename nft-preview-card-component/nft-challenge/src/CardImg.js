import React from 'react';
import iconeView from './img/icon-view.svg'

class CardImg extends React.Component {
    render() {
        return (
            <div className="p-3 ">
                <div className="container position-relative p-0">
                    <img id="imgBord" src={this.props.source} alt="" className="img-fluid" />
                    <div id="imgHover" className="position-absolute d-flex justify-content-center align-items-center">
                    <img src={iconeView} alt="" className="" />
                    </div>
                </div>
            </div>
            
        )
    }
}

export default CardImg;