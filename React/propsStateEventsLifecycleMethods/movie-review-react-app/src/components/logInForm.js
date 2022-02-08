import React from "react";
import User from "./user";
import Password from "./password";

export default class Form extends React.Component {
    render() {
        return (
            <div className="container">
            <div className="card w-25 position-absolute top-50 start-50 translate-middle">
                <div className="card-header bg-dark text-white border border-5 border-dark">
                    <h3>Log In</h3>
                </div>
                <div className="card-body border border-3 border-dark">
                    <User />
                    <Password />
                <div>
                    <button type="submit" className="btn btn-success">Log In</button>
                </div>

                </div>

            </div>
            </div>
        );
    }
}