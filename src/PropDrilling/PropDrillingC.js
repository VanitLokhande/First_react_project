import React, { useState } from 'react'
import PropDrillingD from './PropDrillingD';

function PropDrillingC(props) {
   
  return (
    <>
    <h1>PropDrillingC Component</h1>
    <div>________________________________________________________________</div>
    <PropDrillingD name={props.name}/>
    </>
  )
}

export default PropDrillingC;
