import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';

import { Container, Row, Col } from 'react-bootstrap';

import NavHeader from './components/wrappers/navheader/Navheader.jsx';

function App() {
  return (
    <> 
    <NavHeader />
    <Container fluid>
      <Row noGutters='true'>
        <Col xl={1} />

        <Col xl={10}> Col 1
        </Col>

        <Col xl={1} />
      </Row>
    </Container>
    </>
  );
}

export default App;
