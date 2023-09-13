import React, { useEffect, useState } from "react";
import EMI_final from "./EMI_final";
import EMI_Graph from "./EMI_Graph";
import EMI_Principle from "./EMI_Principle";
import EMI_Rate from "./EMI_Rate";
import EMI_Time from "./EMI_Time";



const EMI =()=>{
    const[time,settime]=useState(1);
    const[principle,setprinciple]=useState(10000);
    const[rate,setrate]=useState(8);
    const[amount,setamount]=useState(0);
    

    const fn_time=(event)=>{
        console.log(event.target.value);
        settime(event.target.value);

    }

    const fn_principle=(event)=>{
        console.log(event.target.value);
        settime(event.target.value);

    }

    const fn_rate=(event)=>{
        console.log(event.target.value);
        settime(event.target.value);

    }
    useEffect(()=>{
        console.log("time-"+time);
        console.log("principle"+principle);
        console.log("rate-"+rate);
        setamount(principle * Math.pow((1+ (rate/100)),  time));
        console.log('amount', principle * Math.pow((1+ (rate/100)),  time));
    })


    return(
        <>
        <EMI_Time fn_time={fn_time}/>
        <EMI_Graph amount={amount} principle={principle}/>
        <EMI_Principle fn_principle={fn_principle}/>
        <EMI_Rate fn_rate={fn_rate}/>
        <EMI_final amount={amount} principle={principle} />
        </>
    )
}
export default EMI;