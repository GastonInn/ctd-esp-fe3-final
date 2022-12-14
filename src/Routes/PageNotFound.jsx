import React from "react"
import { useLocation } from "react-router-dom";
import { useState } from "react";


const PageNotFound = () => {
    const [location, setLocation] = useState(useLocation())
    console.log(location);
    return (
        <div className="notFoundDiv">
            <h1>
                No se encontro nada en la ruta: {location.pathname}
            </h1>
        </div>
    )
}

export default PageNotFound

