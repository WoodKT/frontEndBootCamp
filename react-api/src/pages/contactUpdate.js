import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

function UpdateContact() {
    const [id, setID] = useState(null);
    const [email, setEmail] = useState('');
    const [concern, setConcern] = useState('');

    useEffect(() => {
        setID(localStorage.getItem('ID'))
        setEmail(localStorage.getItem('Email'));
        setConcern(localStorage.getItem('Concern'));
    }, []);

    const updateAPIData = () => {
        axios.put(`https://react-api.free.beeceptor.com/my/api/contact/${id}`, {
            email,
            concern
        })
    }
    return (
        <div className='main'>
            <Form>
                <Form.Group className="mb-3" >
                    <Form.Label>email</Form.Label>
                    <Form.Control type='email' placeholder='email@email.com' value={email} onChange={(e) => setEmail(e.target.value)}/>
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>Concern</Form.Label>
                    <Form.Control as='textarea' placeholder='concern' value={concern} onChange={(e) => setConcern(e.target.value)}/>
                </Form.Group>
                <Button type='submit' onClick={updateAPIData}>Update</Button>
            </Form>
        </div>
    );
};

export default UpdateContact;