import React, { useState } from 'react';

import FormView from './FormView';
import { updateItem } from './api';
import { validateInput } from './util';

const EditData = (props) => {
    const [response, setResponse] = useState('');

    const onEditItem = (item) => {
        if (item && !validateInput(item)) return;

        updateItem(item)
            .then(result => {
                setResponse(JSON.stringify(result))
            },
                (error) => {
                    setResponse(JSON.stringify(error))
                }
            )
    }

    return (
        <FormView response={response} isEditForm={true} item={props.editItem} onFormSubmit={onEditItem}
        ></FormView>
    );
};

export default EditData;

