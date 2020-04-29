import React from "react";
import { Card, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

function Description(props) {
  return (
    <div>
      {props.ListItems.map(
        (element) =>
          element.name === props.match.params.id && (
            <Card className="text-center" >
              <Card.Header>Description</Card.Header>
              <Card.Body >
                <Card.Title>{element.name}</Card.Title>
                <img width="400px" height="400px" src={element.image} alt={element.name}/>
                <Card.Text>{element.description}</Card.Text>
                <Link to="/">
                  <Button variant="primary">Go Back</Button>
                </Link>
              </Card.Body>
              <Card.Footer className="text-muted"></Card.Footer>
            </Card>
          )
      )}
    </div>
  );
}

const mapStateToProps = (state) => ({
  ListItems: state.ListItems,
});

export default connect(mapStateToProps)(Description);
