import Square from './Square';

const GameBoard = ({squares, handleClick}) => {
    return (
      <div className="gameBoard">
        {squares.map((square, i) => (
          <Square key={i} value={square} handleClick={() => handleClick(i)} />
        ))}
      </div>
    );
}

export default GameBoard;