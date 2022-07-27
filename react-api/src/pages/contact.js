import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Table, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
//import { contactUpdate } from '../components/contactUpdate';

export default function Contact() {
    // const [APIData, setAPIData] = useState([]);
    const [info, setInfo] = useState({});
    const { contacts = [] } = info;

    useEffect(() => {
        axios.get(`https://react-api.free.beeceptor.com/contact`)
        .then((response) => {
            setInfo(response.data);
        });
    }, []);

    const setData = (data) => {
        let { id, email, feedback } = data;
        localStorage.setItem('ID', id);
        localStorage.setItem('Email', email);
        localStorage.setItem('Feedback', feedback);
    }

    const getData = () => {
        axios.get(`https://react-api.free.beeceptor.com/contact`)
            .then((getData) => {
                setData(getData.data);
            })
    }

    const onDelete = (id) => {
        axios.delete(`https://react-api.free.beeceptor.com/contact/${id}`)
        .then(() => {
            getData();
        })
    }

    return (
        <div>
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Email</th>
                        <th>Feedback</th>
                        <th>Update</th>
                        <th>Delete</th>
                    </tr>
                </thead>

                <tbody>
                    {/* {data.contacts.map((data) => { */}
                    {info && info.contacts && info.contacts.length > 0 && info.contacts.map((contact) => {
                        return (
                            <tr key={contact.id}>
                                <td>{data.id}</td>
                                <td>{data.email}</td>
                                <td>{data.feedback}</td>
                                    <td> 
                                        <Button onClick={() => setData(data)}><Link to='/contactUpdate'>Update</Link></Button>
                                    </td>
                                <td>
                                    <Button onClick={() => onDelete(data.id)}>Delete</Button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
        </div>
    )
}
// import { useState, useEffect } from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import ContactForm from "../components/contactForm";
// import ContactList from "../components/ContactList";

// export default function Contact() {
//     here we create an array state to store the contact form data
//     const [contacts, updateContacts] = useState([]);

//     const addContact = (contact) => {
//       updateContacts([...contacts, contact]);
//     };
//     const [contacts, setContacts] = useState([]);

//     useEffect(() => {
//       const movieContacts = JSON.parse(
//         localStorage.getItem('react-movie-app-contacts')
//       );

//       if (movieContacts) {
//         setContacts(movieContacts);
//       }
//     }, []);

//     const saveToLocalStorage = (items) => {
//       localStorage.setItem('react-movie-app-contacts', JSON.stringify(items));
//     };

//     const addContact = (movie) => {
//       const newContactList = [...contacts, movie];
//       setContacts(newContactList);
//       saveToLocalStorage(newContactList);
//     };

//     const removeContact = (movie) => {
//       const newContactList = contacts

//       setContacts(newContactList);
//       saveToLocalStorage(newContactList);
//     };


//     return (
//         <div className="">
//           <div>
//             <ContactForm addContact={addContact} />
//         </div><br/>
//         <div>
//             <ContactList
//             contacts={contacts}
// 					  handleContactsClick={removeContact}
// 					  contactComponent={removeContact}
//              />
//         </div>
//         </div>
//     );
//   }



// import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button';

// function Contact() {
//   return (
//     <div className='main'>
//       <div>
//     <Form>
//       <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
//         <Form.Label>Email address</Form.Label>
//         <Form.Control type="email" placeholder="name@example.com" />
//       </Form.Group>
//       <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
//         <Form.Label>Example textarea</Form.Label>
//         <Form.Control as="textarea" rows={3} />
//       </Form.Group>
//       <Button type="submit">Submit</Button>
//     </Form>
//     </div>
//     </div>

//   );
// }

// export default Contact;