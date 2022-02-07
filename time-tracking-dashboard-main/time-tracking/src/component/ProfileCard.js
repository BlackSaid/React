import React, {Component} from 'react';





class ProfileCard extends Component {

    render() { 
        return (
            <div className="bgTout mb-4">
                <div className="bgProfile container">
                    <img className='imgJerem my-4' src={this.props.source}/>
                    <p className='colorP'>Report for</p>
                    <h1 className='text-white'>Jeremy Robson</h1>
                </div>
                    
                <div className="bgProfilebas container my-4 d-flex flex-column">
                    
                    <p onClick={() => this.props.modif("daily")} className="text-white py-1 fs-5">Daily</p>
                    <p onClick={() => this.props.modif("weekly")} className="text-white py-1 fs-5">Weekly</p>
                    <p onClick={() => this.props.modif("monthly")} className="text-white py-1 fs-5">Monthly</p>
                </div>
            </div>
        );
    } 
}

export default ProfileCard;
