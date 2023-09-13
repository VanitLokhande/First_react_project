import React from "react";
import HOC_Filter from "./HOC_Filter";


const city_list = ['Delhi', 'LKO', 'Bhopal', 'Patna', 'Chhastisgarh', 'Jammu', 'Chennai', 'Mumbai']

const HOC_City =(props)=>{
    return(
        <>
        {props.list&& props.list.map((item)=>(
        <div>{item}</div>))}
        </>
    )
}

export default HOC_Filter(HOC_City,city_list);