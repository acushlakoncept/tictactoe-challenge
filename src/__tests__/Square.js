import { func } from 'prop-types';
import React from 'react';
import renderer from 'react-test-renderer';
import Square from '../component/Square';

it('renders Square correctly', () => {
  const tree = renderer.create(<Square value={1} handleClick={func} />);
  expect(tree).toMatchSnapshot();
});
