import { Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

const Square = ({ value, handleClick }) => (
  <Button className={`square btn-light ${value}`} onClick={handleClick}>
    {value}
  </Button>
);

Square.propTypes = {
  value: PropTypes.number.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Square;
