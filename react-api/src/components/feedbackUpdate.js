import React, {useState, useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';
import axios from 'axios';
import FeedbackLinks from './feedbackLinks';
import MovieListHeading from './MovieListHeading';

export default function FeedbackUpdate() {
    const [id, setID] = useState(null);
    const [email, setEmail] = useState('');
    const [feedback, setFeedback] = useState('');

    useEffect(() => {
        setID(localStorage.getItem('ID'))
        setEmail(localStorage.getItem('Email'));
        setFeedback(localStorage.getItem('Feedback'));
    }, []);

    const updateAPIData = () => {
        axios.put(`https://62e29afdb54fc209b87cddab.mockapi.io/contact/${id}`, {
            email,
            feedback
        })
    }
    return (
        <div className='main'>
            <div>
            <MovieListHeading heading='Update Record' />
            <br/>
            </div>
        <Form>
        <Form.Group>
        <Form.Label>Email </Form.Label>
        < Form.Control placeholder = 'email' onChange = {(e) => setEmail(e.target.value)} />
    </Form.Group>
    <Form.Group >
    <Form.Label>Feedback </Form.Label>
    < Form.Control placeholder = 'feedback' onChange = {(e) => setFeedback(e.target.value)}/>
        </Form.Group>
        <br/>
        < Button onClick={updateAPIData} type = 'submit' > Submit </Button>
        <br/>
        <br/>
        <div>
        <FeedbackLinks/>
        </div>
            </Form>
            </div>
    )
}