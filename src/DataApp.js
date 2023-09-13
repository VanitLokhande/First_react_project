import React, { useState,createContext } from "react";

 
const DataAppContext= createContext();
const DataApp =(props)=> {
    const[isloggin, setlogin] = useState(true);
    const[userName, setuserName] = useState('Newton School');
    return(
        <>
           <DataAppContext.Provider value={{userName,isloggin,setlogin,setuserName}}>
                {props.children}

           </DataAppContext.Provider>
            
        </>

    )
}

export default DataApp;
export {DataAppContext};