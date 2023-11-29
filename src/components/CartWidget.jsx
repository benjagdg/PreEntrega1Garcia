//Bootstrap
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping} from '@fortawesome/free-solid-svg-icons'

const CartWidget = () => {
  return (
    <div className="d-flex">
      <Button variant="primary text-white">
        <FontAwesomeIcon icon={faCartShopping} /> Carrito <Badge bg="danger">2</Badge>
      </Button>{''}
    </div>
  )
}

export default CartWidget