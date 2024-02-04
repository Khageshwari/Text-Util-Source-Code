import React from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';


export default function Vegetables(props) {
  return (
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={props.Image} />
    <Card.Body>
      <Card.Title>Vegetables Details</Card.Title>
    </Card.Body>
    <ListGroup className="list-group-flush">
      <ListGroup.Item>Name: {props.Name}</ListGroup.Item>
      <ListGroup.Item>Price: {props.Price} </ListGroup.Item>
      <ListGroup.Item>Quantity: {props.Quantity}</ListGroup.Item>
    </ListGroup>
    
  </Card>
  )
}
