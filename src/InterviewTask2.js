import React, { useState } from "react";

const options=["cricket","football","hocky","baseball","vollyball","rabbi"];
const days=["sunday","mon","tue","wed","thu","fri","sat"];
const InteviewTask2=()=>{
    const [getoption,setoption]=useState();
    const [getday,setgetday]=useState();
    const[show,setshow]=useState(false);

    const handlesub=(e)=>{
        console.log(getoption);
        setgetday(e.target.value);
        console.log(getday);
        setshow(true)
    }

    return(
        <>
            {options.map((item,i)=>{
                return<div>
                    <label>{item}</label>
                    <input  onChange={(e)=>setoption(e.target.value)} name="option" value={item}  type="radio"/>
                </div>
            })}
        <div>______________________________________________________________________________________________________</div>
            {days.map((item,i)=>{
                return<div>
                    <label>{item}</label>
                    <input onChange={(e)=>handlesub(e)} name="day" value={item} type="radio"/>
                </div>
            })}

            {show && <h1>{getoption} On {getday}</h1>}
        </>
    )

}
export default InteviewTask2;