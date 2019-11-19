import React from 'react';

import {
    Button,
    Card
} from 'react-bootstrap';

export default function Product() {
  return (
    <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://images.unsplash.com/photo-1508598064158-23cd2e3cc5b7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" />
        <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
            </Card.Text>
            <Button className="btn-block" variant="primary">Go somewhere</Button>
        </Card.Body>
    </Card>
  );
}
