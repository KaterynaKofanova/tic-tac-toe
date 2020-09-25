import React, {useState} from 'react'
import Board from './Board'
import swal from 'sweetalert'

function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
}

const Game = () =>{
    const [squares, setSquares] = useState(new Array(9).fill(null))
    const [stepNumber, setStepNumber] = useState(0)
    const [xIsNext, setXisNext] = useState(true)
    const nextPlayer = xIsNext ? 'X' : 'O'
    const winner = calculateWinner(squares)

    const handleClick = (index) => {
      if (squares[index]){
        swal(`The square is already occupied!`, `Please choose an empty square :)` , "error", {
          button: 'Continue'
        })
      }
      else{
        const squaresCopy = [...squares]
        squaresCopy[index]=nextPlayer
        setSquares(squaresCopy)
        setXisNext(!xIsNext)
        setStepNumber(stepNumber+1)
      } 
    }

    if (winner){
      setTimeout(() => {
        swal(`The winner is ${winner}!`, `You can play a new round :)` , "success", {
          button: 'Start a new game'
        })
        setSquares(new Array(9).fill(null))
        setXisNext(true)
        setStepNumber(0)
      }, 500)
    }
  
    if (stepNumber===9){
      setTimeout( () => {
        swal(`It is a tie!`, `You can play a new round :)` , "info", {
          button: 'Start a new game'
        })
        setSquares(new Array(9).fill(null))
        setXisNext(true)
      }, 500)
      setStepNumber(0)
    }

    return(
        <div className='game'>
        <h1>Tic Tac Toe Game</h1>
        <Board squares={squares} onClick={handleClick} />
        <h2>Now playing as <span style={{color:'#ac0808'}}>{nextPlayer}</span></h2>
        </div>
    )
}

export default Game