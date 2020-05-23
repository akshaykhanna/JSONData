import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import React, { useState, useEffect } from "react";
import { appConstans } from './config';
import { getWordCount, getCharacterCount } from './util';

const FormView = (props) => {
    const [item, setItem] = useState(props.item);
    useEffect(() => {
        setItem(props.item)
    }, [props.item])

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
                    <Form.Label>Title (Words: {getWordCount(item.title)} | Characters: {getCharacterCount(item.title)}/{appConstans.MAX_TITLE_CHARS})</Form.Label>
                    <Form.Control type="title" placeholder="Enter title" onChange={onTitleChange} value={item.title} />
                </Form.Group>
                <Form.Group as={Row} >
                    <Form.Label>Description (Words: {getWordCount(item.description)} | Characters: {getCharacterCount(item.description)}/{appConstans.MAX_DESC_CHARS})</Form.Label>
                    <Form.Control as="textarea" rows="6" col="6" onChange={onDescChange} value={item.description} />
                </Form.Group>
                <Form.Group as={Row} >
                    <Form.Label column sm="2"> Image link </Form.Label>
                    <Col sm="10">
                        <Form.Control type="input" placeholder="url" onChange={onImgLinkChange} value={item.imageUrl} />
                    </Col>
                </Form.Group>
                <Row>
                    <Button variant="primary" onClick={() => props.onFormSubmit(item)}> {!props.isEditForm ? 'Add' : 'Udpate'} </Button>
                    {props.isEditForm && <Button variant="danger" onClick={props.onDiscard}> Discard </Button>}
                </Row>

            </Form>
            {props.response &&
                <Container>
                    {props.response}
                </Container>}
        </Container>
    )
};

export default FormView;