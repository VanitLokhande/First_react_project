import React, { useState } from "react";
const arr=["batting","balling","filding","coaching","watching","umpiring","sledging","testing","checking","knocking","throwing","caching"];
const CheckDelete=()=>{
    

    const[filterarr,setfilterarr]=useState(arr);
    const[deletearray, setdeletearray]=useState([]);

    const handlechange=(i)=>{
        console.log("i",i);

        const narr=filterarr.filter((item,index)=>{
            return i !== index
        })

        setfilterarr(narr);
    }

    const handledelete=(i)=>{
        console.log("ddd",i);
        
            setdeletearray([...deletearray,i]);
           console.log("deletearray",deletearray);

       

    }
    return(
        <>
            {
                filterarr && filterarr.map((item,i)=>{
                    return <div key={i}>
                        <input onClick={()=>handledelete(i)} type="checkbox"/>
                       <span> {item}</span>
                       { deletearray.includes(i)==false && <button onClick={()=>handlechange(i)}>delete</button>}
                    </div>
                })
            }
        </>
    )
}

export default CheckDelete;
