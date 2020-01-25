import React, { Component } from 'react';
import './navbar.css';

class Navbar extends Component {

    state = {}

    openNav() {
        this.setState({sideNavOpen: true});
    }
      
    closeNav() {
        this.setState({sideNavOpen: false});
    }

    back() {
        let destination = '/';
        if(window.location.pathname === '/history') destination = '/game';
        window.location.pathname = destination;
    }

    render() {

        let { sideNavOpen } = this.state;

        return (

            // navbar start
            <div>
                <div className="navbar-container">
                    <div 
                        className="navbar-logo" 
                        onClick={() => window.location.pathname = '/'}>
                        <b>Knight2Move</b>
                    </div>
                    <div>
                        <button 
                            className={(window.location.pathname === '/') ? "btn hide-on-mobile" : "hidden"}
                            onClick={() => window.location.href = '/game'}>
                            Play Now
                        </button>
                        <button 
                            className={(window.location.pathname !== '/') ? "btn hide-on-mobile" : "hidden"}
                            onClick={() => this.back()}>
                            Back
                        </button>
                        <span 
                            className="hamburger-icon hide-on-desktop"
                            onClick={() => this.openNav()}>
                            &#9776;
                        </span>
                    </div>
                </div>
                <div className={(sideNavOpen) ? "sidenav-open center" : "hidden"}>
                    <a href="#" className="closebtn" onClick={() => this.closeNav()}>&times;</a>
                    <a href="/">Home</a>
                    <a href="/game">Play Now</a>
                </div>
            </div>
            // navbar end

        )
    }
}

export default Navbar;