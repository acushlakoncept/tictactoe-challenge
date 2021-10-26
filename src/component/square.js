import {Button} from 'react-bootstrap';

const Square = ({value, handleClick}) => {
    return (
      <Button className={`square btn-light ${value}`} onClick={handleClick} >
          {value}
      </Button>
    );
}

export default Square