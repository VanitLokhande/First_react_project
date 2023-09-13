import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Navigate=()=>{
    const [username, setusername]= useState('');
    const navigate= useNavigate();


    const fnSubmit=()=>{
     console.log("hahhaha");
     navigate('/mise', {state:{username: username}});
    }

    const fnUsername=(event)=>{
        setusername(event.target.value);
    }

    return(
        <>
            <h1>Navigate</h1>
            <input type="text" onChange={fnUsername} value={username}/>
            <button onClick={fnSubmit}>submit</button>
        </>
    )
}

export default Navigate;