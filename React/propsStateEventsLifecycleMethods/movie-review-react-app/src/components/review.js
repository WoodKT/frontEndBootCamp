//A text review a user can leave on a movie.
import React from 'react';
import SubmitButton from './submit-button';
import Stars from './stars';

//let e = React.createElement;

export default class Review extends React.Component {
    render() {
        return (
            <div className='card w-75'>
                <div className='card-header bg-success text-white'>
                    {this.props.username} {this.props.date}
                </div>
                <div className='card-body'>
                    {this.props.content}
                </div>
                <div className='card-footer'>
                    <span>&nbsp;</span>
                    <SubmitButton />
                </div>
            </div>
        );
    }
}