import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Row } from "react-bootstrap";
import ItemDetail from "../components/ItemDetail";
import { getProductsById } from "../services";

const Product = () => {
  const [productData, setProductData] = useState({});
  const id_product = useParams().id;

  useEffect(() => {
    getProductsById(id_product).then(res => {
      setProductData(res.data[0]);
    }).catch(error => {
      console.log(error);
    });
  },[id_product]);

  return (
    <Container>
      <div className="pt-4">
        <Row>
          <ItemDetail productData={productData}/>
        </Row>
      </div>
    </Container>
  )
}

export default Product