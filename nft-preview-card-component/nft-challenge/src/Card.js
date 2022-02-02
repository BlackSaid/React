import React from 'react';
import CardImg from './CardImg'
import CardBody from './CardBody'

class Card extends React.Component {
    render() {
        return ( 
            <div className="card shadow-lg bg1" >
                <CardImg
                source={this.props.source}
                />
                <CardBody 
                titre={this.props.titre} 

                />

            </div>
        )
    }
}

export default Card;
