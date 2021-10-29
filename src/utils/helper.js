const getWinner = squares => {
  const winningCombos = {
    horizontal: [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
    ],
    vertical: [
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
    ],
    diagonal: [
      [0, 4, 8],
      [2, 4, 6],
    ],
  };

  let winnerPiece = null;
  for (const combo in winningCombos) {
    // eslint-disable-next-line no-loop-func
    winningCombos[combo].forEach(pattern => {
      const [a, b, c] = pattern;
      console.log('p', squares[a], squares[b], squares[c]);
      if (squares[a] && squares[a] === squares[b] && squares[b] === squares[c]) {
        winnerPiece = squares[a];
      }
    });
  }

  return winnerPiece;
};

export default getWinner;
