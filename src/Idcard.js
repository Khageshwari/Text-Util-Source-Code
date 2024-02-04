import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function Idcard(props) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
      <Card.Body>
        <Card.Title>Student Info</Card.Title>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Name: {props.Name}</ListGroup.Item>
        <ListGroup.Item>ID: {props.Id} </ListGroup.Item>
        <ListGroup.Item>Address: {props.Address}</ListGroup.Item>
      </ListGroup>
      
    </Card>
  );
}

export default Idcard;