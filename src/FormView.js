import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import React, { useState } from "react";

import { getWordCount } from './util';

const FormView = (props) => {
    const [item, setItem] = useState(props.item);
    const onTitleChange = (e) => {
        const title = e.target.value;
        setItem({ ...item, title })
    };
    const onDescChange = (e) => {
        const description = e.target.value;
        setItem({ ...item, description })
    };
    const onImgLinkChange = (e) => {
        const imageUrl = e.target.value;
        setItem({ ...item, imageUrl })
    };
    return (
        <Container fluid>
            <Form>
                <Form.Group as={Row} row  >
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="title" placeholder="Enter title" onChange={onTitleChange} value={item.title} />
                </Form.Group>
                <Form.Group as={Row} >
                    <Form.Label>Description(Words: {getWordCount(item.description)}/60)</Form.Label>
                    <Form.Control as="textarea" rows="10" col="6" onChange={onDescChange} value={item.description} />
                </Form.Group>
                <Form.Group as={Row} >
                    <Form.Label column sm="2"> Image link </Form.Label>
                    <Col sm="10">
                        <Form.Control type="input" placeholder="url" onChange={onImgLinkChange} value={item.imageUrl} />
                    </Col>
                </Form.Group>
                <Button variant="primary" onClick={() => props.onFormSubmit(item)}> {!props.isEditForm ? 'Add' : 'Udpate'} </Button>
            </Form>
            {props.response &&
                <Container>
                    {props.response}
                </Container>}
        </Container>
    )
};

export default FormView;