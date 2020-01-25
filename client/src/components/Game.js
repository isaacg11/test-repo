import React, { Component } from 'react';
import { createMove } from '../actions/index';
import Navbar from '../components/Navbar';
import './game.css';

class Game extends Component {

  state = {}

  componentDidMount() {
    this.createChessBoard();
  }

  createChessBoard() {
    let xCoordinates = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
    let chessBoard = [];
    let toggle = true;
    for(let i = 0; i < xCoordinates.length; i++) {
      toggle = !toggle;
      for(let j = 0; j < 8; j++) {
        let calc = (!toggle) ? (j % 2 === 0) : (j % 2 !== 0);
        let color = (calc) ? '#FCCDA2' : '#CB8C49';
        chessBoard.push({
          name: `${xCoordinates[j]}${8 - i}`, 
          color: color,
          selected: false
        });
      }
    }
  
    this.setState({squares: chessBoard});
  
  }

  select(square) {
    this.setState({selectedSquare: square});
  }

  async seeMoves() {
    this.createChessBoard();
    let moves = await createMove(this.state.selectedSquare);
    let chessBoard = this.state.squares;
    moves.data.forEach((move) => {
      chessBoard.forEach((square) => {
        if(square.name === move) square.color = '#4CBB16';
      })
    })

    this.setState({squares: chessBoard});
  }

  render() {

    let { 
      squares = [],
      selectedSquare 
    } = this.state;

    return (
      <div>
        <Navbar />
        
        {/* game start */}
        <div className="toolbar center">
          <h1>Play Game</h1>
          <button 
            className="btn"
            disabled={(!selectedSquare)}
            onClick={() => this.seeMoves()}>
            See Moves
          </button>
          <div className="link-container">
            <a href='/history'>See move history</a>
          </div>
        </div>
        <span className="chessboard-container">
          {squares.map((square, index) => (
            <div 
              key={index} 
              style={{backgroundColor: square.color}}
              className={(square.selected) ? "square-selected" : "square"}
              onClick={() => this.select(square.name)}>
              <img 
                src={require('../images/chess.png')} 
                className={(selectedSquare === square.name) ? "knight" : "hidden"} 
              />
            </div>
          ))}
        </span>
        {/* game end */}

      </div>
    )
  }
}

export default Game;
