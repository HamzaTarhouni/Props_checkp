
import React from "react";
import Card from "react-bootstrap/Card";

import Players from "./Players";
function Player(props) {
  return (
    <div style={{display:"flex",justifyContent:"flex-start"}}>
    <Card style={{ width: "18rem" }}>
      <Card.Img src= {props.props.Image}  />
      <Card.Body>
        <Card.Title>{props.props.name}</Card.Title>
        <Card.Text>
          Team: {props.props.team}
          <br />
          Nationality: {props.props.nationality}
          <br />
          Jersey Number: {props.props.jerseyNumber}
          <br />
          Age: {props.props.age}
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
  );
}

export default Player;
