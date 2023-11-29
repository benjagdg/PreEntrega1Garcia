// Lista de productos de la tienda para la sección "Destacados"
import FeaturedComponent from './FeaturedComponent';
// Lista de productos de la tienda para la sección "Recién Llegados"
import NewsComponent from './NewsComponent';

const ItemListContainer = () => {
  return (
    <>
    <FeaturedComponent />
    <NewsComponent />
    </>
  )
}

export default ItemListContainer