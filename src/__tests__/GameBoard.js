import { func } from 'prop-types';
import React from 'react';
import renderer from 'react-test-renderer';
import GameBoard from '../component/GameBoard';

it('renders GameBoard correctly', () => {
  const cells = Array(9).fill(null);
  const tree = renderer.create(<GameBoard squares={cells} handleClick={func} />);
  expect(tree).toMatchSnapshot();
});
