import React from "react";

const Liftedchild =(props) =>{
    return(

        <>
        <hi>country name-{props.country}</hi>
        <br></br><br></br>
        <button onClick={()=>props.liftfn('india')}>india</button>
        <button onClick={()=>props.liftfn('uk')}>uk</button>
        <button onClick={()=>props.liftfn('usa')}>usa</button>
        <button onClick={()=>props.liftfn('germany')}>germany</button>
        </>

    )
}
export default Liftedchild;