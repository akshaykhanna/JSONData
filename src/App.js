import './App.css';

import { Col, Container, Row } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';

import AddData from "./AddData";
import ListData from "./ListData";
import { apiLink } from './config';

const sortQueryString = '?_sort=id&_order=desc';
function App() {
  const [dataList, setDataList] = useState([]);
  const [editItem, setEditItem] = useState({});

  function fetchUserData() {
    fetch(apiLink + sortQueryString)
      .then(res => res.json())
      .then(res => setDataList(res))
  }

  useEffect(() => {
    fetchUserData();
  }, []);

  const updateItem = (id) => {
    setEditItem(dataList.find(item => item.id === id))
  }
  return (
    <Container fluid className="App-header" >
      <Row>
        <Col xs={6}>
          <ListData dataList={dataList} edit={updateItem} />
        </Col>
        <Col>
          <AddData listCount={dataList.length} />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
