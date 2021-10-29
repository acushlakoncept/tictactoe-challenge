import React, {useState} from 'react';
import './App.css';
import { Container, Button, Form } from 'react-bootstrap';
import GameBoard from './component/GameBoard';
import getWinner from './utils/helper';

function App() {
  const [cells, setCells] = useState(Array(9).fill(null));
  const [winner, setWinner] = useState(null);
  const [turn, setTurn] = useState('X')
  const [formData, setFormData] = useState({})

  const handleRestartGame = () => {
    setWinner(null)
    setCells(Array(9).fill(null))
    setTurn('X')
  }

  const startNewPlayers = () => {
    handleRestartGame()
    document.getElementById('gameSection').classList.toggle('d-none')
    document.getElementById('playerForm').classList.toggle('d-none')
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

  const handleInputChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    let data = {}
    data[name] = value;
    setFormData({...formData, ...data})
}

  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
    document.getElementById('gameSection').classList.toggle('d-none')
    document.getElementById('playerForm').classList.toggle('d-none')
  }

  return (
    <Container className="d-flex flex-column align-items-center">
      <h1 className="text-center">Welcome to Tic Tac Toe Game</h1>
      <hr />
      <Form id="playerForm" onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="player1">
        <Form.Control name="player1" type="text" placeholder="Enter Player 1 Name" onChange={handleInputChange} required />
      </Form.Group>
      <Form.Group className="mb-3" controlId="player2">
        <Form.Control name="player2" type="text" placeholder="Enter Player 2 Name" onChange={handleInputChange} required />
      </Form.Group>
        <Button type="submit" className="mb-2">Submit</Button>
      </Form>

     <div id="gameSection" className="d-none">
      <h3>{winner ? `Winner: ${winner === 'X' ? formData['player1'] : formData['player2']}` : !cells.includes(null) ? 
      'Game is a tie' : `Next Player: ${turn === 'X' ? formData['player1'] : formData['player2']}`}</h3>
      <GameBoard squares={cells} handleClick={handleClick} />
      {
        (winner || !cells.includes(null)) && (
          <>
            <Button className="btn-success mt-2" onClick={()=>handleRestartGame()}>Play Again</Button>
            <Button className="btn-success mt-2" onClick={()=>startNewPlayers()}>Start with New Players</Button>
          </>
        )
      }
      </div>

    </Container>
  );
}

export default App;
