//a component that represents movie data (i.e. image, synopsis, audience, etc…)
import React from "react";
import ReviewList from "./reviewList";

export default class MovieData extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            title: props.title,
            synopsis: props.synopsis,
            audience: props.audience,
            reviews: [] 
        };
    }

    render() {
        return (
            <div className="card w-75 border-success">
            <h4 className="card-header text-center bg-dark text-white">
                <div className="row">
                    <div className="col">{this.state.title}</div>
                    <div className="col">{this.state.audience}</div>
                </div>
            </h4>
            <div className="card-body">
                <div className="row">
                    <div className="col"><p className="card-text">{this.state.synopsis}</p></div>
                </div>
            </div>
            <div className="card-footer">
                <div><ReviewList /></div>
            </div>
        </div>
        )
    }
}