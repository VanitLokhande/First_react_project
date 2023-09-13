import React, { useEffect, useState } from 'react'

function Colourpick() {
    const[bgcolor, setbgcolor]=useState('white');

    useEffect(()=>{
        console.log("bgcolor- "+bgcolor)
    })

    const colors=[
        {
            name:'blue',
            label:'blue',
            color:'#78d6f5'

        },
        {
            name:'red',
            label:'red',
            color:'#fc805d' 
        },
        {
            name: 'green',
            label: 'Green',
            color: '#4df0a6'
        }
    ]

    
  return (
    <>
    <h1>Colorpick_Component</h1>

    {colors && colors.map((item,index)=>(
        <div className='title' key={item.name+index} style={{'background':item.color}} onClick={()=> setbgcolor(item.color)}>
         {item.label}
        
        </div>
    ))}
    
    </>
  )
}

export default Colourpick;
