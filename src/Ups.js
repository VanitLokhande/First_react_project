import React, { useEffect, useState } from "react";
import Ups_child from "./Ups_child";

const Ups=()=>{
     const[count,setcount]= useState(1);
     const[childcount,setchildcount]=useState(1);
     useEffect(()=>{
      console.log("hahaha");
     })
     
     return(
        <>
          <h1>Ups Component</h1>
          <button onClick={()=>setcount(count+1)} className="btn btn-dark">Counter</button>
          <button onClick={()=>setchildcount(childcount+1)} className="btn btn-dark">child_Counter</button>
          <div>{count}</div>
          <Ups_child child_count={childcount}/>
        </>
    )
}

export default Ups;