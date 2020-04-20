import './App.css';

import { Col, Container, Row } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';

import AddData from "./AddData";
import ListData from "./ListData";
import { apiLink } from './config';

function App() {
  const [dataList, setDataList] = useState([]);
  function fetchUserData() {
    fetch(apiLink)
      .then(res => res.json())
      .then(res => setDataList(res))
  }

  useEffect(() => {
    fetchUserData();
  }, []);
  return (
    <Container fluid className="App-header" >
      <Row>
        <Col xs={6}>
          <ListData dataList={dataList} />
        </Col>
        <Col>
          <AddData listCount={dataList.length} />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
