//a form at the bottom of a Movie component that allows users to leave reviews. When submitted, the review should be added to the movie. All this data can be stored in an array, no networking or database needed for this assignment.
import React from "react";
import User from "./user";

export default class Form extends React.Component {
    render() {
        return (
            <div className="container">
            <div className="card w-25 position-absolute top-50 start-50 translate-middle">
                <div className="card-header bg-dark text-white border border-5 border-dark">
                    <h3>Review:</h3>
                </div>
                <div className="card-body border border-3 border-dark">
                    <User />
                <div>
                    <button type="submit" className="btn btn-success">Submit</button>
                </div>

                </div>

            </div>
            </div>
        );
    }
}