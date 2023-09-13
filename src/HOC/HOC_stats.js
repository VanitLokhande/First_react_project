import React from "react";
import HOC_Filter from "./HOC_Filter";

const stats_list=['Delhi', 'UP', 'Chhatisgarh', 'Bihar', 'Rajasthan', 'Jharkhand', 'Goa', 'Tamilnadu', 'J&K', 'Maharashtra', 'Haryana']

const HOC_stats=(props)=>{
    return(
        <>
        {props.list&& props.list.map((item)=>(
        <div>{item}</div>))}
        </>
    )
}

export default HOC_Filter(HOC_stats, stats_list);