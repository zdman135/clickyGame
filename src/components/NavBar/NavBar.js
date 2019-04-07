import React from 'react';
import './NavBar.css';

function NavBar(props) {
    return (
        <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
            <a className="navbar-brand" href="/clickyGame">Insta-Models Memory Game</a>
            <div className="collapse navbar-collapse" id="navbarsExampleDefault">
                <ul className="navbar-nav text-light ">
                    <li className="nav-item the-pad">{props.guess}</li>
                    <li className="nav-item">Score: {props.currentScore} | Top Score: {props.topScore}</li>
                </ul>
            </div>
        </nav>
    );
}

export default NavBar;