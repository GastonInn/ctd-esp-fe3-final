import React, { useState } from "react";
import { Button, TextField } from "@mui/material"
import { useFormik } from "formik";
import * as Yup from "yup"


const Form = () => {
    const [initialValues, setinitialValues] = useState({ nombre: "", email: "" })

    const sendForm = (data) => {
        alert("Tu consulta fue enviada con exito.");
        console.log(data);
        console.log(initialValues);
    }

    const { handleSubmit, handleChange, values, errors } = useFormik({
        initialValues,
        validationSchema: Yup.object({
            nombre: Yup.string().required("Debes ingresar un nombre"),
            email: Yup.string().required("Debes ingresar un email"),
        }),

        onSubmit: sendForm
    });

    return (
        <div>
            <form className="form-container form" onSubmit={handleSubmit}>
                <TextField
                    type="text"
                    id="outlined-basic"
                    label="Nombre completo"
                    variant="outlined"
                    fullWidth
                    name="nombre"
                    onChange={handleChange}
                    value={values.nombre}
                    size="small"
                    error={!!errors.nombre}
                    helperText={errors.nombre}
                    sx={{ marginBottom: .5 }}
                />
                <TextField
                    type="email"
                    id="outlined-basic"
                    label="Email"
                    variant="outlined"
                    fullWidth
                    name="email"
                    onChange={handleChange}
                    value={values.email}
                    size="small"
                    error={!!errors.email}
                    helperText={errors.email}
                    sx={{ marginBottom: .5 }}
                />
                <Button sx={{
                    backgroundColor: "#313c8e",
                    color: '#fff',
                    '&:hover': {
                        backgroundColor: '#414fb9',
                        color: '#fff',
                    }
                }} variant="contained" type='submit'>Enviar</Button>
            </form>
        </div>
    );
};

export default Form;
