import React, { useContext, useState } from "react";
import Liftedchild from "./Liftedchild";
import { DataAppContext } from "./DataApp";


const Lifted =() =>{
    const [country,setcountry]=useState('india');
    const contextDetail = useContext(DataAppContext);
    console.log(contextDetail);

    const updatecountry = (data) =>{
        setcountry(data);

    }


    return(
        <>
        
            <div>
                {contextDetail.isloggin && <div>{contextDetail.userName}</div>}
            </div>
            
            <div>
                {contextDetail.isloggin ?
                (<button onClick={()=> contextDetail.setlogin(false)}>Logout</button>):
                (<button onClick={()=> contextDetail.setlogin(true)}>Login</button>)}
            </div>
        <br></br>

        <div>-----------------------------------------------------------------------------------------------------</div>
        <Liftedchild country={country} liftfn={updatecountry}/>
        </>
    )

}
export default Lifted;