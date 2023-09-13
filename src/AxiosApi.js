import React from "react";
import {useState, useEffect } from "react";
import axios from "axios";
import './AxiosApi.css'
const AxiosApi=()=>{
    const [alldata, setalldata]=useState([]);

    useEffect(() => {
        axios
            .get('https://jsonplaceholder.typicode.com/posts')
            .then((res)=>
                setalldata(res.data.slice(0,6))
            
        );
       
     }, [])
    return(
        <>
        <div className="grid">
            {alldata && alldata.map((item)=>{
                return <div className="cart" key={item.id}>
                    <h5>{item.title.slice(0,15).toUpperCase()}</h5>
                    <p>{item.body}</p>
                    </div>
                

            })}
         </div>
           
        </>
    )
}

export default AxiosApi;