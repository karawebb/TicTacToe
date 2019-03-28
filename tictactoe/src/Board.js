import React, { Component } from 'react';
import Square from './Square'
import './App.css';
import X from './X.png'
import O from './O.png'

class Board extends Component {
    constructor(props) {
        super(props)
        this.state = {
            board : Array(9).fill(null),
            player:X,
            winner:null
        }
    }

    checkWinner(){
        let winLines=
        [
            ['0','1','2'],
            ['3','4','5'],
            ['6','7','8'],
            ['0','3','6'],
            ['1','4','7'],
            ['2','5','8'],
            ['0','4','8'],
            ['2','4','6'],
        ]
        for(let index=0;index<winLines.length;index++){
            const [a,b,c]= winLines[index]
            if(this.state.board[a] && this.state.board[a] === this.state.board[b] && this.state.board[a] === this.state.board[c]){
                alert('You are a Winner!')
                this.setState({
                    winner:this.state
                })
            }
        }
    }

    handleClick(index){
        let newBoard=this.state.board
        if(this.state.board[index]===null && !this.state.winner)
        newBoard[index]=this.state.player
        let player=this.state.player === X ? O : X

        this.setState({
            board:newBoard,
            player:player

        })
        this.checkWinner()
    }

    resetGame = () => {
    this.setState({board: Array(9).fill(null), player: X,})

    }


  render() {
    const Square = this.state.board.map(
        (square, index) => <div className= "square"
        key = {index}
        onClick={()=>this.handleClick(index)}>
        <img src={square}/>
    </div>
    )

    return (
     <div className= "container">
         <div className = "board">
         {Square}
         </div>
         <button className="reset" onClick={this.resetGame}> PLAY AGAIN! </button>
     </div>
    )
  }
}

export default Board;
