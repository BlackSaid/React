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
                    
                <div className="bgProfilebas container my-4">
                    <p className="text-white">Daily</p>
                    <p className="text-white">Weekly</p>
                    <p className="text-white">Monthly</p>
                </div>
            </div>
        );
    }
}

export default ProfileCard;
