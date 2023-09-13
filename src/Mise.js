import React from "react";
import { Link, useLocation } from "react-router-dom";

const Mise=()=>{
    const id = "1234";

    const {state}= useLocation();

    console.log("got the usename - ",state);
    return(
        <>
        <h1>Mise</h1>
        <div>
            <Link className="btn btn-success"to={`/UseParam/${id}`}>UseParam</Link>

            <div>UseParam</div>

        </div>
            </>
    )
}

export default Mise;