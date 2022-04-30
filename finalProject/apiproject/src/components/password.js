import React from 'react';

export default class Password extends React.Component {
    render() {
        return (
            <div className="mb-3">
                <label for="pwInput" className="form-label has-success">Password</label>
                <input type="password" className="form-control input-lg" id="pwInput" placeholder="Password"></input>
            </div>
        );
    }
}