import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Table, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Contact() {
    const [APIData, setAPIData] = useState([]);
    //const [info, setInfo] = useState([]); // [] was {}
    //const { contacts = [] } = info;

    useEffect(() => {
        axios.get(`https://62e29afdb54fc209b87cddab.mockapi.io/contact/`)
        .then((response) => {
            setAPIData(response.data);
        });
    }, []);

    const setData = (data) => {
        let { id, email, feedback } = data;
        localStorage.setItem('ID', id);
        localStorage.setItem('Email', email);
        localStorage.setItem('Feedback', feedback);
    }

    const getData = () => {
        axios.get(`https://62e29afdb54fc209b87cddab.mockapi.io/contact/`)
            .then((getData) => {
                setAPIData(getData.data);
            })
    }

    const onDelete = (id) => {
        axios.delete(`https://62e29afdb54fc209b87cddab.mockapi.io/contact/${id}`)
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
                    {APIData.map((data) => {
                    {/* {info && info.contacts && info.contacts.length > 0 && info.contacts.map((contact) => { */}
                        return (
                            <tr key={data.id}>
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