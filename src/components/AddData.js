import { Container, Row } from 'react-bootstrap';
import React, { useState } from 'react';

import FormView from './FormView';
import { addItem } from '../api';
import { dummyData } from '../dummyData';
import { validateInput } from '../util';

const AddData = (props) => {
    const id = props.listCount;
    const [response, setResponse] = useState('');

    const onAddItem = (item) => {
        if (item && !validateInput(item)) return;
        const data = { id, date: new Date().toDateString(), ...item };

        addItem(data)
            .then(result => {
                props.refresh();
                setResponse(JSON.stringify(result))
            },
                (error) => {
                    setResponse(JSON.stringify(error))
                }
            )
    } 

    return (
        <Container>
            <Row> <h2> Add item ({id})</h2> </Row>
            <FormView response={response} item={{ ...dummyData, id }} onFormSubmit={onAddItem}
            ></FormView>
        </Container>
    );
};

export default AddData;

