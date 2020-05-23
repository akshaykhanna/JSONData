import { Button, Container, Media } from 'react-bootstrap';

import React from 'react';
import DelDialog from "./DelDialog";

const ListData = (props) => {
    const dataList = props.dataList
    if (!dataList) {
        return "loading...";
    }
    return (
        <Container style={{ maxHeight: '700px', overflow: 'auto' }}>
            <ol className="list-unstyled">
                {dataList.map(news => (
                    <Media as="li" key={news.id} style={{borderBottom: '2px solid white', margin:'10px 0', 
                    padding:'10px 0'}}>
                        <img
                            width={64}
                            height={64}
                            className="mr-3"
                            src={news.imageUrl}
                            alt="Generic placeholder"
                        />
                        <Media.Body>
                            <h5>{news.id + '. ' + news.title}</h5>
                            <p>{news.description}</p>
                            <Button variant="secondary" onClick={() => props.edit(news.id)}>Edit</Button>
                            <DelDialog refresh={props.refresh} item={news} />
                        </Media.Body>
                    </Media>
                ))}
            </ol>
        </Container>
    );
};

export default ListData;