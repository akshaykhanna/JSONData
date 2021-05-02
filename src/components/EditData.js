import { Container, Row } from 'react-bootstrap';
import React, { useState } from 'react';

import FormView from './FormView';
import { updateItem } from '../api';
import { validateInput } from '../util';

const EditData = (props) => {
    const [response, setResponse] = useState('');

    const onEditItem = (item) => {
        if (item && !validateInput(item)) return;

        updateItem(item)
            .then(result => {
                props.refresh();
                props.onDiscard();
                setResponse(JSON.stringify(result))
            },
                (error) => {
                    setResponse(JSON.stringify(error))
                }
            )
    }

    return (
        <Container>
            <Row> <h2> Edit item ({props.editItem.id}) </h2> </Row>
            <FormView response={response} isEditForm={true} item={props.editItem} onFormSubmit={onEditItem}
                onDiscard={props.onDiscard}
            ></FormView>
        </Container>

    );
};

export default EditData;

