import React,{useState} from 'react'
import PropDrillingB from './PropDrillingB';

function PropDrillingA() {
    const[name, setname]=useState("Vanit");
  return (
    <>
    <h1>PropDrillingA Component</h1>
    <div>________________________________________________________________</div>
    <PropDrillingB  name={name}/>
    </>
  )
}

export default PropDrillingA;
