import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const NewsComponent = () => {
  return (
    <div className="pt-4">
      <h2>Recién Llegados</h2>
      <Row>
        <Col>
          <Card style={{ width: '18rem' }} className="mb-2">
            <Card.Img src="./src/assets/products/1.png" />
            <Card.Body>
              <Card.Title>TP-Link WiFi Hogar</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit... 
              </Card.Text>
              <Button variant="dark">Ver detalle</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: '18rem' }} className="mb-2">
            <Card.Img src="./src/assets/products/2.png" />
            <Card.Body>
              <Card.Title>Mercusys Portatil 2.4Ghz</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit... 
              </Card.Text>
              <Button variant="dark">Ver detalle</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: '18rem' }} className="mb-2">
            <Card.Img src="./src/assets/products/3.png" />
            <Card.Body>
              <Card.Title>D-Link Extended Range</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit... 
              </Card.Text>
              <Button variant="dark">Ver detalle</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: '18rem' }} className="mb-2">
            <Card.Img src="./src/assets/products/4.png" />
            <Card.Body>
              <Card.Title>Asus Dual Band Gaming</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit... 
              </Card.Text>
              <Button variant="dark">Ver detalle</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row> 
    </div>
  )
}

export default NewsComponent