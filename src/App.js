import './App.css';

import { Col, Container, Row } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';

import AddData from "./AddData";
import EditData from "./EditData";
import ListData from "./ListData";
import { apiLink } from './config';
import { getNewItemId } from "./util";

const sortQueryString = '?_sort=id&_order=desc';
function App() {
  const [dataList, setDataList] = useState([]);
  const [editItem, setEditItem] = useState(null);

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
  const discardEdit = () => (setEditItem(null))
  return (
    <Container fluid className="App-header" >
      <Row>
        <Col xs={6}>
          <ListData refresh={fetchUserData} dataList={dataList} edit={updateItem} />
        </Col>
        <Col>
          {!editItem ?
            <AddData refresh={fetchUserData} listCount={getNewItemId(dataList)} /> :
            <EditData refresh={fetchUserData} editItem={editItem} onDiscard={discardEdit} />}
        </Col>
      </Row>
    </Container>
  );
}

export default App;
