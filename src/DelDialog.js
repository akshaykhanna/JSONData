import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { delItem } from "./api";

const DelDialog = ({ item, refresh }) => {
    const [show, setShow] = useState(false);

    const handleDel = async () => {
        await delItem(item.id);
        close();
        refresh();
    }
    const close = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <Button variant="danger" onClick={handleShow}>
                Delete
        </Button>

            <Modal show={show} onHide={close}>
                <Modal.Header closeButton>
                    <Modal.Title>Confirm delete item id : {item.id}</Modal.Title>
                </Modal.Header>
                <Modal.Body> Are sure you want delete item with title: {item.title}</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={close}>
                        No
            </Button>
                    <Button variant="primary" onClick={handleDel}>
                        Yes
            </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default DelDialog;