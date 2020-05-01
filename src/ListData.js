import { Container, Media } from 'react-bootstrap';

import React from 'react';

const ListData = (props) => {
    const dataList = props.dataList
    if (!dataList) {
        return "loading...";
    }
    return (
        <Container style={{ maxHeight: '700px', overflow: 'auto' }}>
            <ul className="list-unstyled">
                {dataList.map(news => (
                    <Media as="li" key={news.key}>
                        <img
                            width={64}
                            height={64}
                            className="mr-3"
                            src={news.imageUrl}
                            alt="Generic placeholder"
                        />
                        <Media.Body>
                            <h5>{news.title}</h5>
                            <p>{news.description}</p>
                        </Media.Body>
                    </Media>
                ))}
            </ul>
        </Container>
    );
};

export default ListData;