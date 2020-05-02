import React, { useState } from 'react';
import { getWordCount, validateInput } from './util';

import FormView from './FormView';
import { addItem } from './api';
import { dummyData } from './dummyData';

const AddData = (props) => {
    const id = props.listCount;
    const [response, setResponse] = useState('');

    const onAddItem = (item) => {
        if (item && !validateInput(item)) return;
        const data = { id, ...item };

        addItem(data)
            .then(result => {
                setResponse(JSON.stringify(result))
            },
                (error) => {
                    setResponse(JSON.stringify(error))
                }
            )
    }

    return (
        <FormView response={response} item={{ ...dummyData, id }} onFormSubmit={onAddItem}
        ></FormView>
    );
};

export default AddData;

