import Container from 'react-bootstrap/Container';
import ItemList from './ItemList';
import { useState, useEffect } from 'react';
import { getProducts } from '../services';

const ItemListContainer = (props) => {
  const greeting = props.greeting;
  const [productsData, setProductsData] = useState([]);

  useEffect( () => {
    getProducts().then(res => {
      setProductsData(res.data);
    }).catch(error => {
      console.log(error);
    });
  }, []);

  return (
    <>
    <Container>
      <h3 className="mt-4">{greeting}</h3>
      <ItemList productsData={productsData}/>
    </Container>
    </>
  )
}

export default ItemListContainer