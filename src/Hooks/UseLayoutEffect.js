import React, { useEffect, useLayoutEffect } from "react";

const UseLayoutEffect =()=>{

    useEffect(()=>{
        console.log("Useeffect");
    })

    useLayoutEffect(()=>{
        console.log("useLayoutEffect");
    })
    return(
        <>
            <div>Hook UseLayoutEffect</div>

        </>

    )
}

 export default UseLayoutEffect;