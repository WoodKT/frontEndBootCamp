import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Table, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function FeedbackTable() {
    const [APIData, setAPIData] = useState([]);

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
                        return (
                            <tr key={data.id}>
                                <td>{data.id}</td>
                                <td>{data.email}</td>
                                <td>{data.feedback}</td>
                                    <td> 
                                        <Button variant='outline-primary' onClick={() => setData(data)}><Link to='/feedbackUpdate'>Update</Link></Button>
                                    </td>
                                <td>
                                    <Button variant='danger' onClick={() => onDelete(data.id)}>Delete</Button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
        </div>
    )
}