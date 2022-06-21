import React from "react";
import { Card } from "react-bootstrap";

export default class Review extends React.Component {
    constructor(props){   
        super(props);       
            this.text = props.text;
            this.userName = props.userName;
            this.userReview = props.userReview;
            this.key = props.key;
    }

    render() {
        return (
            <Card>
                <Card.Header>{this.userName}</Card.Header>
                <Card.Body>{this.userReview}</Card.Body>
            </Card>
        );
    }
}