import React, { useState, useEffect, useContext } from 'react'
import Card from '../Components/Card'
import axios from "axios"
import { ContextGlobal } from '../Components/utils/global.context'


const Home = () => {

    const { store } = useContext(ContextGlobal);
    const { state } = store;
    const { data, theme } = state;
    return (
        <main className={theme} >
            <h1>Home</h1>
            <div className='card-grid'>
                {/* Aqui deberias renderizar las cards */}
                <div style={{ width: "100%", display: "flex", flexWrap: "wrap", gap: "20px", alignItems: "center", justifyContent: "center", padding: "20px" }}>
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