import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, { useState } from 'react';
import axios from 'axios';

const Home = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [checkbox, setCheckbox] = React.useState(false);
  const postData = () => {
      axios.post(`https://react-api.free.beeceptor.com/my/api/index`, {
          email,
          password,
          checkbox
      })
  }
  return (
	<div className='main'>
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)}/>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Agree Here" onChange={(e) => setCheckbox(e.target.value)} />
      </Form.Group>
      <Button className="btn btn-dark btn-block" onClick={postData} type="submit">
        Log In
      </Button>
    </Form>
	</div>
  );
};

export default Home;
