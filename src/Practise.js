import { nanoid } from "nanoid";
import React, { Component, useEffect, useRef, useState } from "react"
import Practise1 from "./Practise1";
import Practisechild from "./PractiseChild"



function Practise(){
  const [tempinput, settempinput] = useState('');
  const [todolist,setTodolist]=useState([]);
  const[editid,seteditid]=useState('');
  const[showedit,setshowedit]= useState(false);
  const[editValue, setEditValue] =useState('')
  const[deleteid,setdeletid]=useState('')

  const handleChange = (event) => {
    settempinput(event.target.value);
    console.log(event.target.value);
  };

  const handleSubmit =()=>{
      let obj={
        id: nanoid(),
        task: tempinput,

      }
      setTodolist([...todolist,obj])
      settempinput('')
      
  }

  const handleedit=(data)=>{
    seteditid(data);
    console.log(data);
    setshowedit(true)
  }

  const handleditvalue=(event)=>{
    setEditValue(event.target.value)
    console.log(event.target.value)
  }

  const saveedit=()=>{
    setshowedit(false)
    let temfn = todolist.map((temp)=>{
      if(temp.id === editid ){
        temp.task= editValue
    }
    return temp;
    })
    setTodolist(temfn)
  }

  const handledelet=(data)=>{
    setdeletid(data)
    let deletfn = todolist.filter((temp)=>{
      return temp.id !== deleteid ;

        
    })
   
    
    setTodolist([...deletfn])
  }

    
    
    
    
    
   

    return(
        <>
          <div id="main">
            <input type="text" id="task" onChange={handleChange} value={tempinput} />
            <button id="btn" onClick={handleSubmit}>Add</button>
            {todolist && todolist.map((item,index)=>(
          <div key={item.id + index}>
            
            <span>{item.task}</span>
            <button onClick={()=>handleedit(item.id)}>Edit</button>
            <button onClick={()=>handledelet(item.id)} >Delete</button>

          </div>
        ))}


        {showedit && (
          <>
          <input type="text" onChange={handleditvalue}/>
          <button onClick={saveedit}>SaveEdit</button>
          </>
        )}
            
          </div>
          
        

       
        </>
        

    )
}

export default Practise;