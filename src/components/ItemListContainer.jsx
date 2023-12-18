import Container from 'react-bootstrap/Container';
import FeaturedComponent from './FeaturedComponent';
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