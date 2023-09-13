import React from "react";
import { useParams } from "react-router-dom";

const UseParam=()=>{
    const {id} = useParams();
    return(
        <>
        <div>Id Came From Mise-{id}</div>
        <div>UseParam</div>
        </>
    )
}

export default UseParam;