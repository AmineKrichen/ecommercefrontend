import React, { useState } from 'react'

const Facture = () => {
    const[fact,setFact]=useState(
        {
            numfact:1,
            datefact:"09/10/2024",
            mtfact:5000

        }
    )
    const handleUpdate=()=>{
        setFact({...fact,//garder li9dim
             numfact:2,
              //datefact:"10/10/2024",
               mtfact:6000})
    }


  return (
    <div>
        <Facture
        numfact={fact.numfact}
        datefact={fact.datefact}
        mtfact={fact.mtfact}

        />
        <button onClick={()=>handleUpdate()}>Modifier Facture</button>
    </div>
  )
}

export default Facture