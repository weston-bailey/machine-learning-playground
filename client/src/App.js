import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';


function App() {
  return (
    <Container fluid>
      <Row>
        <Col xl={1}>
          gutter left
        </Col>

        <Col> Col 1
        </Col>

        <Col xl={1}>
          gutter middle
        </Col>

        <Col> Col 2
        </Col>

        <Col xl={1}>
          gutter right
        </Col>
      </Row>
    </Container>
  );
}

export default App;
