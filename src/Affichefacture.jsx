import React from 'react'

const Affichefacture = ({numfact,datefact,mtfact}) => {
  return (
    <div>
        <h1>Facture n° : {fact.numfact}</h1>
        <h1>Date de facturation : {fact.datefact}</h1>
        <h2>Montant total facture : {fact.mtfact}</h2>
    </div>
  )
}

export default Affichefacture