import { render, screen } from "@testing-library/react";
import React from 'react'
import "@testing-library/jest-dom/extend-expect";
import { BrowserRouter } from "react-router-dom";
import App from '../App';
import axios from "axios";
import Contact from "../Routes/Contact";

const fetchData = () => axios.get("https://jsonplaceholder.typicode.com/users/");

test("Testeando si la api funciona correctamente", async () => {
    return fetchData().then(res => {
        expect(res.data[3].name).toBe("Patricia Lebsack")
    })
})

test("Testeando si en la pantalla se visualiza el texto Contact del navbar", async () => {
    render(<BrowserRouter><App/></BrowserRouter>)
    const texto = await screen.findByText("Contact")
    expect(texto.textContent).toBe("Contact")
})

test("Testeando si se renderiza el boton de submit del formulario", () => {
    render(<Contact/>);
    const buttonSubmit = screen.getByRole('button', {name: /Enviar/i})
    expect(buttonSubmit).toBeInTheDocument();
})