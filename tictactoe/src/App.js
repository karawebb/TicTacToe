import React, { Component } from 'react';
import Board from './Board'
import './App.css';
import TicTacToeLogo from'./TicTacToeLogo.png'



class App extends Component {
  render() {
    return (
     <div>
     <br/>
     <br/>
     <br/>
     <img className="logo" src={TicTacToeLogo} />
     <br/>
     <br/>


     <Board />

     </div>
    );
  }
}

export default App;
