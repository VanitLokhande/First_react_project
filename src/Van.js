import React, { useState } from "react";
import VanChild from './VanChild';


const Van = ()=>{
    const[data,setdata]=useState("Vanit");

    const dataupdate =() =>{
        setdata("Ravikant")
    }

    return(
        <>
        <div>{data}</div>
        
        <VanChild datau={setdata}/>
        
        </>
    )
}
export default Van;