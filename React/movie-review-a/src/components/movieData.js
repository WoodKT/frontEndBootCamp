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
            <Card className="w-75 border-success">
            <Card.Header as="h1">{this.state.title}</Card.Header>
            <Card.Body>
              <div className="cardBody">
                {this.state.synopsis}
                <br />
                {this.state.audience}
              </div> 
                <br />
              <div>
                    <h5> User Reviews: </h5>    
              </div> 
                <br />
                  <Review /> 
            </Card.Body>
          </Card>
        )
    }
}