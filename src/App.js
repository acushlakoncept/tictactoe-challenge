import React, {useState} from 'react';
import './App.css';
import { Container, Button } from 'react-bootstrap';
import GameBoard from './component/GameBoard';
import getWinner from './utils/helper';

function App() {
  const [cells, setCells] = useState(Array(9).fill(null));
  const [winner, setWinner] = useState(null);
  const [turn, setTurn] = useState('X')

  const handleRestartGame = () => {
    setWinner(null)
    setCells(Array(9).fill(null))
    setTurn('X')
  }

  const handleClick = (i) => {
    if(winner || !cells.includes(null)) return
    if(cells[i]) {
      alert('already clicked');
      return;
    }
    let squares = [...cells]

    

    if(turn === 'X') {
      squares[i] = 'X'
      setTurn('O')
    } else {
      squares[i] = 'O'
      setTurn('X')
    }

    setCells(squares)
    setWinner(getWinner(squares))
  };

  return (
    <Container className="d-flex flex-column align-items-center">
    
      <h1 className="text-center">Welcome to Tic Tac Toe Game</h1>
      <hr />
      <h3>{winner ? `Winner: ${winner}` : !cells.includes(null) ? 'Game is a tie' : `Next Player: ${turn}`}</h3>
      <GameBoard squares={cells} handleClick={handleClick} />
      {
        (winner || !cells.includes(null)) && (
          <>
            <Button className="btn-success mt-2" onClick={()=>handleRestartGame()}>Play Again</Button>
          </>
        )
      }

    </Container>
  );
}

export default App;
