import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import axios from 'axios';

export default function ContactForm() {
    const [email, setEmail] = useState('');
    const [feedback, setFeedback] = useState('');
    const postData = () => {
        axios.post(`https://62e29afdb54fc209b87cddab.mockapi.io/contact`, {
            email,
            feedback
        })
    }
    return (
        <div className="main" >
            <Form >
                <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control placeholder='email' onChange={(e) => setEmail(e.target.value)}/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Feedback</Form.Label>
                    <Form.Control placeholder='feedback' onChange={(e) => setFeedback(e.target.value)}/>
                </Form.Group>
                <br/>
                <Button onClick={postData} type='submit'>Submit</Button>
            </Form>
        </div>
    )
}