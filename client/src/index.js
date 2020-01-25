import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/Home';
import Game from './components/Game';
import History from './components/History';
import './index.css';

const Index = ({ pathname }) => {
    switch(pathname) {
      case "/":
        return <Home />;
      case "/game":
        return <Game />;
      case "/history":
          return <History />;
      default:
        return <Home />;
    }
};

let pathname = window.location.pathname;

ReactDOM.render(<Index pathname={pathname} />, document.getElementById('root'));

window.addEventListener("popstate", () => {
    pathname = window.location.pathname;
})

