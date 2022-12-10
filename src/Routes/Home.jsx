import React, { useContext } from 'react'
import Card from '../Components/Card'
import { ContextGlobal } from '../Components/utils/global.context'


const Home = () => {

    const { store } = useContext(ContextGlobal);
    const { state } = store;
    const { data, theme } = state;

    return (
        <main className={theme} >
            <h1>Home</h1>
            <div className='card-grid'>
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