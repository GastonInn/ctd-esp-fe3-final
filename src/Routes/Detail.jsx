import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import { TableContainer, TableHead, TableBody, Table, TableRow, TableCell, Paper } from '@mui/material';


const Detail = () => {

    const { id } = useParams();
    const [dentist, setDentist] = useState({});
    const [dentistUrl, setDentistUrl] = useState(`https://jsonplaceholder.typicode.com/users/${id}`)

    const tableAlign = "center";

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
                            <TableCell align={ tableAlign }>Name</TableCell>
                            <TableCell align={ tableAlign }>Email</TableCell>
                            <TableCell align={ tableAlign }>Phone</TableCell>
                            <TableCell align={ tableAlign }>Website</TableCell>
                        </TableRow>  
                    </TableHead>  
                    <TableBody>  
                        <TableRow>  
                            <TableCell align={ tableAlign }>{ dentist.name }</TableCell>
                            <TableCell align={ tableAlign }>{ dentist.email }</TableCell>
                            <TableCell align={ tableAlign }>{ dentist.phone }</TableCell>
                            <TableCell align={ tableAlign }>{ dentist.website }</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default Detail