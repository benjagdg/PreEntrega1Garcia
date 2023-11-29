// Lista de productos de la tienda para la sección "Destacados"
import DestacadosComponent from './DestacadosComponent';
// Lista de productos de la tienda para la sección "Recién Llegados"
import NewsComponent from './NewsComponent';

const ItemListContainer = () => {
  return (
    <>
    <DestacadosComponent />
    <NewsComponent />
    </>
  )
}

export default ItemListContainer