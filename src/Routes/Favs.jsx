import React, { useState, useEffect, useContext } from "react";
import Card from "../Components/Card";
import { ContextGlobal } from "../Components/utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {

    const { store } = useContext(ContextGlobal);
    const { state } = store;
    const { dentistFavs } = state;

    const [favs, setFavs] = useState();

    useEffect(() => {
        setFavs(JSON.parse(localStorage.getItem("favs")))
    }, [dentistFavs])

    return (
        <div style={{ marginBottom: "40px" }}>
            <h1 style={{ display: "block", marginBottom: "20px" }}>Dentists Favs</h1>
            <div className="card-grid">
                {favs?.length
                    ? favs.map((dentistFav) => (
                        <Card {...dentistFav} key={dentistFav.id} />
                    ))
                    : null}
            </div>
        </div>
    );
};

export default Favs;
