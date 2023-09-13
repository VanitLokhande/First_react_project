import React  from "react";
import ChildA from "./ChildA";
import { useState } from "react";
import { createContext } from "react";

const NameContext = createContext();


const Parent=()=>{
    const[name , setname]=useState('Vanit');
    const[count ,setcount]=useState(0);
    return(
        <>
        <div>----------------</div>
        <NameContext.Provider value={{name,setname,count,setcount}}>
            <ChildA/>
            </NameContext.Provider>
        </>

    )
}
export default Parent;
export {NameContext};