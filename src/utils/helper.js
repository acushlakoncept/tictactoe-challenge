const getWinner = squares => {
  const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  let result = null;
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < winningCombos.length; i++) {
    const [a, b, c] = winningCombos[i];
    if (squares[a] && squares[a] === squares[b] && squares[b] === squares[c]) {
      result = squares[a];
    }
  }

  return result;
};

const startNewPlayers = handleRestartGame => {
  handleRestartGame();
  document.getElementById('gameSection').classList.toggle('d-none');
  document.getElementById('playerForm').classList.toggle('d-none');
};

const handleSubmit = e => {
  e.preventDefault();
  e.target.reset();
  document.getElementById('gameSection').classList.toggle('d-none');
  document.getElementById('playerForm').classList.toggle('d-none');
};

export default getWinner;
export { startNewPlayers, handleSubmit };
