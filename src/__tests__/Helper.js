import '@testing-library/jest-dom';
import getWinner from '../utils/helper';

describe('The Winning Combos', () => {
  const squares = ['X', 'O', null, 'X', 'O', null, 'X', null, null];
  it('should validate the correct winning combo', () => {
    const winner = getWinner(squares);
    expect(winner).toEqual('X');
  });
});
