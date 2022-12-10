import React, { useContext, useEffect, useState } from "react"
import axios from "axios"
import { ContextGlobal } from "../Components/utils/global.context"
import Card from "../Components/Card"


const Home = () => {

    const { store } = useContext(ContextGlobal);
    const { state, dispatch } = store;
    const { data, theme } = state;
    const [dentistUrl, setDentistUrl] = useState("https://jsonplaceholder.typicode.com/users/")

    const getData = async () => {
        const { data } = await axios.get(dentistUrl);
        dispatch({ type: "dentists", payload: data });
        //console.log("Cargando datos de odontologos desde home");
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <main className={theme} >
            <h1>Home</h1>
            <div className="card-grid">
                <div className={"cardContainerDiv"} >
                    {
                        data.map((data, index) => {
                            //console.log(data.id)
                            return <Card {...data} key={data.id} />
                        })
                    }
                </div>
            </div>
        </main>
    )
}

export default Home