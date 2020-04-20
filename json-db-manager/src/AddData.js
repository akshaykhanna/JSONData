import { Button, Col, Container, Form, Row, Toast } from 'react-bootstrap';
import React, { useState } from 'react';

import { apiLink } from './config';
import { dummyData } from './dummyData';

const AddData = (props) => {
    const [isAddData, setIsAddData] = useState(false);
    const [response, setResponse] = useState(null);
    const [title, setTitle] = useState(dummyData.title);
    const [description, setDesc] = useState(dummyData.desc);
    const [imageUrl, setImgLink] = useState(dummyData.imgLink);
    const id = props.listCount;
    const validateInput = () => {
        if (title === '' || imageUrl === '' || description === '') {
            alert("Invalid input: Empty title or image link or description");
            return false;
        }
        if (getWordCount(description) > 60) {
            alert("Invalid input: Description more than 60 words");
            return false;
        }
        return true;
    }
    const onFormSubmit = () => {
        debugger;
        if (!validateInput()) return;
        const data = { 'id': id, 'title': title, 'description': description, 'imageUrl': imageUrl };
        const apiUrl = apiLink;

        const options = {
            method: 'POST',
            body: JSON.stringify(data),
            headers: { "Content-Type": "application/json" }
        };

        fetch(apiUrl, options)
            .then(res => res.json())
            .then(result => {
                setResponse(response)
                setIsAddData(true)
            },
                (error) => {
                    setResponse(error)
                }
            )
    }
    const onTitleChange = (e) => {
        setTitle(e.target.value)
    };
    const onDescChange = (e) => {
        setDesc(e.target.value)
    };
    const onImgLinkChange = (e) => {
        setImgLink(e.target.value)
    };
    return (
        <Container fluid>
            <Form >
                <Form.Group as={Row} row controlId="exampleForm.ControlInput1">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="title" placeholder="Enter title" onChange={onTitleChange}
                        value={title}
                    />
                </Form.Group>

                <Form.Group as={Row} controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Description(Words: {getWordCount(description)}/60)</Form.Label>
                    <Form.Control as="textarea" rows="10" col="6" onChange={onDescChange}
                        value={description} />
                </Form.Group>
                <Form.Group as={Row} controlId="formPlaintextPassword">
                    <Form.Label column sm="2">
                        Image link
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control type="input" placeholder="url" onChange={onImgLinkChange}
                            value={imageUrl}
                        />
                    </Col>
                </Form.Group>
                <Button variant="primary" onClick={onFormSubmit} >
                    Add data
                </Button>
            </Form>
            {isAddData && <Toast>
                <Toast.Header>
                    <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
                    <strong className="mr-auto">Response</strong>
                    <small>11 mins ago</small>
                </Toast.Header>
                <Toast.Body>{response}</Toast.Body>
            </Toast>}
        </Container>
    );
};

export default AddData;

function getWordCount(description) {
    return description.split(" ").length;
}
