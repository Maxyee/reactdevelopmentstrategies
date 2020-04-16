import React from 'react';

import {Container, Row, Button, Col, Badge, Card} from 'react-bootstrap';

function App() {
  return (
    <Container>
      <Row>
        <p>Hello WOrld</p>
      </Row>
      <Row>
        <p>Hello WOrld 2</p>
        <Button varient="priamry">Primary</Button>{' gap '}
        <Button variant="secondary">Secondary</Button>
      </Row>
      <Col>
          <Button varient="primary">
              Profile <Badge variant="light">9</Badge>
              <span className="sr-only">unread messages</span>
          </Button>
      </Col>

      <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                  Some quick example text to build on the card title and make up the buld of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
          </Card.Body>
      </Card>
    </Container>
  );
}

export default App;
