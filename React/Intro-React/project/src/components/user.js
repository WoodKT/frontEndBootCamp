import React from 'react';

export default class User extends React.Component {
    render() {
        return (
            <div className="mb-3">
                <label for="userInput" className="form-label has-success">Username</label>
                <input type="username" className="form-control input-lg" id="userInput" placeholder="Username"></input>
            </div>
        );
    }
}