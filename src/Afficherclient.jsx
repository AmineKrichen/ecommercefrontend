import React from 'react'

const Afficherclient = (props) => {
  return (
    <div>
        <h1>Code client : {props.code}</h1>
    <h1>Email client : {props.email}</h1>
    <h1>Adresse client : {props.adresse}</h1>
    </div>
  )
}

export default Afficherclient