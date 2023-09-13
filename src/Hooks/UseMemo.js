import React, { useMemo,useEffect, useState } from "react";

const UseMemo=()=>{
    const carlist=["Tata","Kia","Hyundai","Nissan","Ford","GM","Volkswagen","Mahindra","Toyota","Honda","Suguki","DC","BMW","Audi"]
    const [cars,setcars]=useState(carlist);
    const [subscribe,setSubscribe]=useState(false);

    const displaycars=(cars)=>{
        console.log("Displaycars Triggerd......");
        const carshtml =cars&&cars.map((item,index)=>(
            <div key={item+index}>{item}</div>
        ))
        return carshtml;
    }
    useEffect(()=>{
        console.log("UseEffect Triggerd....")
    })

    const rendercar=useMemo(()=> displaycars(cars),[cars]);
    return(
        <>
        <h1>UseMemo</h1>

        <div>{rendercar}</div>
        

        <div><button onClick={()=>setSubscribe(!subscribe)} className="btn btn-dark">Subscribe</button></div>
        <div><button onClick={()=>setcars([...cars,"Tesla"])} className="btn btn-primary">Add cars</button></div>
        </>
    )
}

export default UseMemo;