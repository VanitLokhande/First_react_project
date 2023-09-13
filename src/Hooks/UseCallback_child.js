import React, { useEffect } from "react";

const UseCallback_child=(props)=>{
    const {temp}=props;

    useEffect(()=>{
        console.log("UseCallback_child- "+temp);
    },[temp])
    return(
        <>
        <h1>UseCallback_child</h1>
        <div>Temp={temp("name from child")}</div>
        </>
    )
}

export default UseCallback_child;