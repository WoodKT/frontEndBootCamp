import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import React, { useState } from 'react';
import axios from 'axios';

function Contact() {
  // const [id, setID] = useState(null);
  const [email, setEmail] = useState('');
  const [concern, setConcern] = useState('');
  const postData = () => {
      axios.post(`https://react-api.free.beeceptor.com/my/api/contact/`, {
          // id : "{{faker 'random.uuid'}}",
          // id,
          email,
          concern
      })
  }
  return (
    <div className='main'>
    <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email Address</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" onChange={(e) => setEmail(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Questions and Concerns</Form.Label>
        <Form.Control as="textarea" rows={3} onChange={(e) => setConcern(e.target.value)} />
      </Form.Group>
      <Button onClick={postData} type="submit">Submit</Button>
    </Form>
    </div>
  );
};

export default Contact;