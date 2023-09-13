import React, { useCallback, useEffect, useState } from "react";
import UseCallback_child from "./UseCallback_child";

const UseCallback=()=>{
    const [show,setshow]= useState(false);
    const [name, setname]= useState('temp name');

    useEffect(()=>{
        console.log("name-"+name+" show- "+show);
    })

    const renderchildcomponent= useCallback((temp)=>{
        return"Data from render- "+ temp+name;
    },[name]);
    
    return(
        <>
        <h1>UseCallback</h1>
        <button className="btn btn-success" onClick={()=>setshow(!show)}>show/hide</button>

        <div>___________________________________________________________________________________________________</div>

        <button className="btn btn-warning" onClick={()=>setname("hahah")}>button name update</button>
        <UseCallback_child temp={renderchildcomponent}/>
        </>
    )
}

export default UseCallback;