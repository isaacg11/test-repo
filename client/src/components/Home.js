import React, { Component } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import './home.css';

class Home extends Component {
    render() {
        return (
            <div>
                <Navbar />

                {/* home start */}
                <div className="home-container">
                    <div className="info-container">
                        <h2 className="center">Welcome to Knight2Move!</h2>
                        <h3 className="description center">In this game, you will be able to predict where a knight can move in exactly 2 turns on a chess board.</h3>
                        <div className="directions-container">
                            <div>
                                <div className="step">
                                    <span className="step-number"><b>1</b></span>
                                </div>
                                <p className="detail">Select a square to set the knight's initial position on the chess board.</p>
                            </div>
                            <div>
                                <div className="step">
                                    <span className="step-number"><b>2</b></span>
                                </div>
                                <p className="detail">Click the "See Moves" button at the top of the screen.</p>
                            </div>
                            <div>
                                <div className="step">
                                    <span className="step-number"><b>3</b></span>
                                </div>
                                <p className="detail">See all the possible moves in 2 turns highlighted on the chess board!</p>
                            </div>
                        </div>
                        <div className="example-container">
                            <img src={require('../images/example.png')} className="example-img" />
                        </div>
                    </div>
                </div>
                {/* home end */}

                <Footer />
            </div>
        )
    }
}

export default Home;