import React from 'react'
import Form from '../Components/Form'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {
  return (
    <div className='contactDiv'>
      <h2>Want to know more?</h2>
      <p className='contactP'>Send us your questions and we will contact you</p>
      <Form/>
    </div>
  )
}

export default Contact