import React from 'react'
import PropDrillingC from './PropDrillingC';

function PropDrillingB(props) {
  return (
 <>
 <h1>PropDrillingB Component</h1>
 <div>________________________________________________________________</div>
 <PropDrillingC name={props.name}/>

 </>
  )
}

export default PropDrillingB;
