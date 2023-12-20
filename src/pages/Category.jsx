import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { Container, Row } from "react-bootstrap";
import ItemList from "../components/ItemList";
import { getProductsByCategory } from "../services";

const Category = () => {
  const [productsCategoryData, setProductsCategory] = useState([]);
  const id_category = useParams().id;
  useEffect( () => {
    getProductsByCategory(id_category).then(res => {
      setProductsCategory(res.data);
    }).catch(error => {
      console.log(error);
    });
  }, [id_category]);

  return (
    <Container>
      <div className="pt-4">
        <Row>
          <ItemList productsData={productsCategoryData}/>
        </Row>
      </div>
    </Container>
  )
}

export default Category