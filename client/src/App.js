import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';

import { Container, Row, Col } from 'react-bootstrap';

import NavHeader from './components/wrappers/navheader/Navheader.jsx';
import Canvas from './components/Canvas'

function App() {
  return (
    <> 
    <NavHeader />
    <Container fluid>
      <Row noGutters='true'>
        {/* <Col xl={1} />

        <Col xl={10}> Col 10
        </Col>

        <Col xl={1} /> */}
      <Canvas />

      </Row>
    </Container>
    </>
  );
}

export default App;
