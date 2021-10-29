import { Button } from 'react-bootstrap';

const Square = ({ value, handleClick }) => (
  <Button className={`square btn-light ${value}`} onClick={handleClick}>
    {value}
  </Button>
);

export default Square;
