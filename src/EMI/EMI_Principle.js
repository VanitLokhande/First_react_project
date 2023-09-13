import React from "react";

const EMI_Principle =(props)=>{
    return(
        <>
        <h4>Enter Principle</h4>
        <input onChange={props.fn_principle}/>
        </>
    )
}
export default EMI_Principle;