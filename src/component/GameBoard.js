/* eslint-disable react/no-array-index-key */
import PropTypes from 'prop-types';
import Square from './Square';

const GameBoard = ({ squares, handleClick }) => (
  <div className="gameBoard">
    {squares.map((square, i) => (
      <Square key={i} value={square} handleClick={() => handleClick(i)} />
    ))}
  </div>
);

GameBoard.propTypes = {
  squares: PropTypes.arrayOf.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default GameBoard;
