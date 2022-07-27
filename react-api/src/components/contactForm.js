// export default function ContactForm({addContact}) {
//   const initialState = {
//     email: "",
//     userText: ""
//   };
  
//   const [state, setState] = useState(initialState);

//   const handleChange = (event) => {
//     setState({
//       ...state,
//       [event.target.name]: event.target.value,
//     })
//   }

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     addContact(state);
//     setState(initialState);
//   };

//   console.log(state);

import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import axios from 'axios';

export default function ContactForm() {
    const [email, setEmail] = useState('');
    const [feedback, setFeedback] = useState('');
    const postData = () => {
        axios.post(`https://react-api.free.beeceptor.com`, {
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