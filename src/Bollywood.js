import React, { useState } from "react";
import './Bollywood.css';


const Bollywood = () =>{
    const[status ,setstatus]=useState(0);
    const[show, setshow]=useState(false);
    const[location , setlocation]=useState('');

    const increament = () =>{
        setstatus(status+1);
    }

    const showhide = () =>{
        setshow(!show);

    }

    const displayNorth =() =>{
        setlocation("north_hemisphere")
    }
    const displaysauth =() =>{
        setlocation("sauth_hemisphere")
    }
    return(
        <>
        <div>{status}</div>
        <button onClick={increament}>increament</button>
        <br></br>
        <div>...........................................</div>
        <button onClick={showhide}>show/hide</button>
         {show && <div>To be shown</div>}
         <div>...........................................</div>
         <button onClick={displayNorth}>india</button>
         <button onClick={displayNorth}>usa</button>
         <button onClick={displayNorth}>uk</button>
         <button onClick={displayNorth}>rusiaa</button>
         <button onClick={displaysauth}>new zeland</button>
         <button onClick={displaysauth}>austrelia</button>
         <button onClick={displaysauth}>sauth africa</button>
         <button onClick={displaysauth}>mecxico</button>
        {
         (location !== '') && (location === 'north_hemisphere' ?<div>north_hemisphere</div> :<div>sauth_hemisphere</div> )
        }
        </>
    )
}
export default Bollywood;