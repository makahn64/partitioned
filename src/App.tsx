import React, { useState } from 'react';
import {Container, Row, Col, Alert } from 'react-bootstrap';
import {MapCustomizationOptionMap, USAMap, MapMouseEventDataset} from 'react-usa-map-fc';

function App() {

  const [ customize, setCustomize ] = useState<MapCustomizationOptionMap>({});

  const mapClickHandler = (state: string) => {
    console.log(`clicked ${state}`);
    setCustomize({ ...customize, [state]: { fill: '#00ff00'}});
  }

  const mapFlyoverHandler = (state: string) => {
    console.log(`mouse entered ${state}`);
    setCustomize({ ...customize, [state]: { fill: '#0095ff'}});
  }

  const mapClickEventHandler = (event: React.MouseEvent<SVGPathElement>) => {
    // if some typings whiz knows a better way, lemme know!
    const dataset = (event.target as SVGPathElement).dataset as MapMouseEventDataset;
    console.log(dataset);
  }

  return (
    <Container>
      <Row className="mt-5">
        <Col/>
        <Col lg={8}>
          <Alert variant="info">react-usa-map-fc</Alert>
          <div>
            <USAMap
              onClick={mapClickHandler}
              onClickEvent={mapClickEventHandler}
              onMouseOver={mapFlyoverHandler}
              customize={customize}
              width={800}/>
          </div>
        </Col>
        <Col/>
      </Row>
    </Container>
  );
}

export default App;
