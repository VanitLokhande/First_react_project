import React from "react";

const EMI_Rate=(props)=>{
    return(
        <>
        <h4>Enter Rate</h4>
        <input onChange={props.fn_rate}/>
        </>
    )
}
export default EMI_Rate;