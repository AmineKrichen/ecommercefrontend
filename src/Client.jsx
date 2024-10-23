import Afficherclient from "./Afficherclient"
import { useState } from "react"
import Facture from "./Facture"

const Client=()=>{

    const[code,setCode]=useState(10)
    const[email,setEmail]=useState("iit@gmail.com")
    const[adresse,setAdresse]=useState('cité el ons')


    const handleChange=()=>{
        setCode(20)
        setAdresse("Sfax")
    }


    return(
    <>
    <Afficherclient code={code} email={email} adresse={adresse}/>
    <button onClick={()=>handleChange()}>Modifier Client</button>
    <br />Page client
    <Facture/>
    </>
    )

}
export default Client
