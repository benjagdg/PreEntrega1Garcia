import React from 'react'
import { Col, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const ItemCard = ({productsData}) => {
  const descriptionOverflow = {
    height: "150px",
    whiteSpace: "pre-line",
    textOverflow: "ellipsis",
    overflow: "hidden"
  };
  const titleOverflow = {
    height: "50px",
    whiteSpace: "pre-line",
    textOverflow: "ellipsis",
    overflow: "hidden"
  };
  const productImage = {
    height: "220px",
    padding: "10px"
  };
  return (
    productsData.map((product) => {
      return (
        <Col key={"prod_"+product.id}>
          <Card style={{ width: '19rem' }} className="mb-2 text-center">
            <Card.Img src={product.image} style={productImage}/>
            <Card.Body>
              <Card.Title style={titleOverflow}>{product.title}</Card.Title>
              <Card.Text style={descriptionOverflow}>
                {product.description}
              </Card.Text>
              <Link to={`/item/${product.id}`} className="btn btn-info text-white">Ver detalle</Link>
            </Card.Body>
          </Card>
        </Col>
      )
    })
  )
}

export default ItemCard