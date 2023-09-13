import React, { useState } from "react";

const countries=[
    {name:"India",value:"In",cities:["delhi","mumbai","chennai"]},
    {name:"England", value:"En",cities:["london","birmingham","leeds"]},
    {name:"Australia" ,value:"aus", cities:["perth","melbourne","adelaide"]}
]



const InterviewTask=()=>{
    const[contry,setcontry]=useState(0);
    const handleSelect=(event)=>{
        console.log(event.target.value);
        setcontry(event.target.value);
    }
    console.log(countries[0].cities[0]);
    // console.log("++++",contry);
    return(
        <>
            <select onChange={(e)=>handleSelect(e)}>
            {
                
                countries.map((item,i)=>{
                    return <option value={i}>{item.name}  </option>
                })
                

            }
            </select>

            <select>
            {  
              
              countries[contry].cities.map((item)=>{
                return <option>{item}</option>
               }
               )
               
            }
            </select>
           
        </>
    )
}

export default InterviewTask;
