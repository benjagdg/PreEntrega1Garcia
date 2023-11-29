import Container from 'react-bootstrap/Container';
// Lista de productos de la tienda para la sección "Destacados"
import FeaturedComponent from './FeaturedComponent';
// Lista de productos de la tienda para la sección "Recién Llegados"
import NewsComponent from './NewsComponent';

const ItemListContainer = (props) => {
  const greeting = props.greeting;
  return (
    <>
    <Container>
      <h3 className="mt-4">{greeting}</h3>
      <FeaturedComponent />
      <NewsComponent />
    </Container>
    </>
  )
}

export default ItemListContainer