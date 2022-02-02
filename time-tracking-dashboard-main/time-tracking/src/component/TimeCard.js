import React, {Component} from 'react';


class TimeCard extends Component {

    render() { 
        return (
            <div style={{backgroundColor:this.props.style}}className="bgAll">
                <div style={{backgroundColor:this.props.backgroundColor}} className="bgProfileCard container d-flex justify-content-end align-items-center">
                    <img className="w-25 " src={this.props.logo}    /> 
                </div>
                    
                <div className="bgProfilebas2 container mb-4">
                    <div className="d-flex justify-content-between">
                        <p className="text-white mt-3 p-1 fs-5">{this.props.titre}</p> 
                        <span className="text-white text-end mt-3 p-1">. . .</span>
                    </div>
                    <p className="text-white p-1 fs-1 mb-0">{this.props.heure}hrs</p>
                    <p className="text-white mt-2 p-1">Last Week - {this.props.hour}hrs</p>
                </div>
            </div>
        );
    }
}

export default TimeCard;