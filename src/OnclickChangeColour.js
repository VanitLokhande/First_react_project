import React, { useState } from "react";


const OnclickChangecolour =()=>{
    const[change, setchange]=useState(false)
    return(
        <>
        <div className={change ?'my-div-temp' : 'my-div'}></div>
        <button className="btn btn-success" onClick={ ()=> setchange(!change)}>Change Colour</button>
        </>
    )
}
export default OnclickChangecolour;