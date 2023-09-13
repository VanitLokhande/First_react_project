import React, { useEffect }  from "react";
import { nanoid } from "nanoid";
import { useState } from "react";

const Todo =()=>{
    const [tempInput, setTempInput] = useState('');
    const [todolist, setTodolist] = useState([]);
    const [editId, setEditId] = useState('');
    const[showedit,setshowedit]= useState(false);
    const[editValue, setEditValue] =useState('')


    const handleChange =(event)=>{
        console.log('user has typed - ', event.target.value);
        setTempInput(event.target.value)
    }
    const handleSubmit =()=>{
        let obj ={
            id : nanoid(),
            task:tempInput,
            status:false
        }
        setTodolist([...todolist, obj]);
        setTempInput('');
        
    }

    const editfn =(data)=>{
        console.log('user has ccc - ', data);
        setEditId(data);
        setshowedit(true);
        }

    const tempEditFn=(event)=>{
        setEditValue(event.target.value)
        console.log(event.target.value)
    }

    const saveEditFn=()=>{
        setshowedit(false);
        let templist = todolist.map((temp)=>{
            if(temp.id == editId){
                temp.task = editValue;
            }
            return temp;

        })
        setTodolist(templist);
    }

    useEffect(()=>{
        console.log(todolist)
    })
    return(
        <>

        <input type="text" value={tempInput} onChange={handleChange}/>
        <button className="btn btn-success" onClick={handleSubmit}>Add</button>

        {todolist && todolist.map((item,index)=>(
            <div key={item.id + index}>
                <span>{item.task}</span>
                <button className="btn btn-dark" onClick={()=>editfn(item.id)}>Edit</button>
                <button className="btn btn-dark" onClick={()=>editfn(item.id)}>Delete</button>
            </div>
        ))}

        {showedit && (<>
            <input type="text" onChange={tempEditFn}></input>
            <button onClick={saveEditFn}>SaveEdit</button>
        </>
        )}
        </>
    )
}
export default Todo;