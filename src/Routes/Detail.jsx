import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import { TableContainer, TableHead, TableBody, Table, TableRow, TableCell, Paper } from '@mui/material';


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {

    const { id } = useParams();
    const [dentist, setDentist] = useState({});
    const [dentistUrl, setDentistUrl] = useState(`https://jsonplaceholder.typicode.com/users/${id}`)

    const getData = async () => {
        const { data } = await axios.get(dentistUrl);
        setDentist(data);
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <div style={{ padding: "20px 0" }}>
            <h1 style={{ display: "block", marginBottom: "30px" }}>Detail Dentist {id} </h1>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }}>
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">Name</TableCell>
                            <TableCell align="center">Email</TableCell>
                            <TableCell align="center">Phone</TableCell>
                            <TableCell align="center">Website</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell align="center">{dentist.name}</TableCell>
                            <TableCell align="center">{dentist.email}</TableCell>
                            <TableCell align="center">{dentist.phone}</TableCell>
                            <TableCell align="center">{dentist.website}</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default Detail