import React, { useContext } from "react";
import {NameContext} from "./Parent";


const ChildD=()=>{
    const temp = useContext(NameContext);
    return(
        <>
        <br></br>
        <h4>Name-{temp.name}</h4>
        <br></br>
        <h4>Counter-{temp.count}</h4>
        <br></br>
        <button className="btn btn-info" onClick={()=>(temp.setname('Vanit Ravikant Lokhande'))}>Update Name</button>
        <br></br><br></br>
        <button className="btn btn-info" onClick={()=>(temp.setcount(temp.count+1))}>Increase-Counter</button>
        </>
    )
}
export default ChildD;