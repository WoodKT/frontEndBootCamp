import React from "react";
import Review from "./review";
import { Card } from "react-bootstrap";

export default class MovieData extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            id: props.id,
            title: props.title,
            synopsis: props.synopsis,
            audience: props.audience,
        };
    }

    render() {
        return (
            <Card className="w-75">
            <Card.Header as="h1">{this.state.title} <p className="card-subtitle mb-2 text-muted">{this.state.audience}</p></Card.Header>
            <Card.Body>
              <div>
                <p>{this.state.synopsis}</p>
              </div> 
            </Card.Body>
            <Card.Footer>
            <div>
              <h5>User Reviews:</h5>  
              <Review />
            </div> 
            </Card.Footer>
          </Card>
        )
    }
}