import React from 'react';

class Header extends React.Component {

    render() { 
        return (
            <div className="d-flex justify-content-between my-5 bordureB">
                <div className=" my-3 modifText">
                    <h2 className="text-white lineH">ROCK</h2>
                    <h2 className="text-white lineH ">PAPER</h2>
                    <h2 className="text-white lineH ">SCISSORS</h2>
                </div>
                <div className="">
                    <div className="text-center bg-white bordureBg">
                        <p className="text-primary fw-bold modifScore">SCORE</p>
                        <p className="taille12 fw-bold ">{this.props.score}</p>
                    </div>
                </div>
            </div>
        );
    } 
}

export default Header;