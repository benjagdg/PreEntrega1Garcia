import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const FeaturedComponent = () => {
  return (
    <Container className="pt-4">
      <h2>Destacados</h2>
      <Row>
        <Col>
          <Card style={{ width: '18rem' }} className="mb-2">
            <Card.Img src="./src/assets/products/8.png" />
            <Card.Body>
              <Card.Title>Nintendo Switch Oled</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit... 
              </Card.Text>
              <Button variant="outline-success">Ver detalle</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: '18rem' }} className="mb-2">
            <Card.Img src="./src/assets/products/7.png" />
            <Card.Body>
              <Card.Title>Razer Viper Mini Wireless</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit... 
              </Card.Text>
              <Button variant="outline-success">Ver detalle</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: '18rem' }} className="mb-2">
            <Card.Img src="./src/assets/products/6.png" />
            <Card.Body>
              <Card.Title>Consola PlayStation 5</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit...  
              </Card.Text>
              <Button variant="outline-success">Ver detalle</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: '18rem' }} className="mb-2">
            <Card.Img src="./src/assets/products/5.png" />
            <Card.Body>
              <Card.Title>Kit Raspberry Pi Pico</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit... 
              </Card.Text>
              <Button variant="outline-success">Ver detalle</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row> 
    </Container>
  )
}

export default FeaturedComponent