import Row from 'react-bootstrap/Row';
import ItemCard from './ItemCard';

const ItemList = ({productsData}) => {
  return (
    <div className="pt-4">
      <Row>
        <ItemCard productsData={productsData} />
      </Row> 
    </div>
  )
}

export default ItemList