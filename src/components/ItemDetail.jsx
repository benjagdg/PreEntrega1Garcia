import { Card } from "react-bootstrap"

const ItemDetail = ({productData}) => {
  return (
    <>
      <Card>
        <Card.Body>
          <div className="row">
            <div className="col-5">
              <img src={productData.image} alt={productData.model} className="text-center w-100"/>
            </div>
            <div className="col-7">
              <h4>{productData.title}</h4>
              <p><b>{productData.brand} - {productData.model}</b></p>
              <p>{productData.description}</p>
              <p>Valor: ${productData.price} | Stock: {productData.stock}</p>
             
              <button type="button" className="btn btn-success"><b>+</b> Agregar al Carrito</button>
            </div>
          </div>
        </Card.Body>
      </Card>
    </>
  )
}

export default ItemDetail