import React from "react";

const EMI_Time=(props)=>{
    return(
        <>
        <h4>Enter Time</h4>
        <input onChange={props.fn_time}/>
        </>
    )
}
export default EMI_Time;