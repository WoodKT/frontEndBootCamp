import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Table from 'react-bootstrap/Table';

function Read() {
    const [APIData, setAPIData] = useState([]);
    useEffect(() => {
        axios.get(`https://react-api.free.beeceptor.com/my/api/contact/`)
        .then((response) => {
            setAPIData(response.data);
        })
    }, []);

    const setData = (data) => {
        let { id, email, concern } = data;
        localStorage.setItem('ID', id);
        localStorage.setItem('Email', email);
        localStorage.setItem('Concern', concern);
    }

    const getData = () => {
        axios.get(`https://react-api.free.beeceptor.com/my/api/contact/`)
            .then((getData) => {
                setAPIData(getData.data);
            })
    }

    const onDelete = (id) => {
        axios.delete(`https://react-api.free.beeceptor.com/my/api/contact/${id}`)
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
                        <th>Concern</th>
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
                                <td>{data.concern}</td>
                                    <td> 
                                        <Button onClick={() => setData(data)}><Link to='/update'>Update</Link></Button>
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
    );
};

export default Read;