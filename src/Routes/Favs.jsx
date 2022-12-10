import React, { useState, useEffect, useContext } from "react";
import { ContextGlobal } from "../Components/utils/global.context";
import Card from "../Components/Card";


const Favs = () => {

    const { store } = useContext(ContextGlobal);
    const { state } = store;
    const { dentistFavs } = state;

    const [favs, setFavs] = useState();

    useEffect(() => {
        setFavs(JSON.parse(localStorage.getItem("favs")))
    }, [dentistFavs])

    return (
        <div className="favDiv">
            <h1 className="favH1">Dentists Favs</h1>
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
