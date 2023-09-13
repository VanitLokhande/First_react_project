import React, { useState } from "react";

const Formfn =()=>{
    const[username,setusername]=useState('');
    const[useremail,setuseremail]=useState('');
    const[userpassword,setuserPassword]=useState('');
    const[formstatus,setformstatus]=useState(false);


    const input_username =(event)=>{
        console.log('input_username', event.target.value);
        setusername(event.target.value)
    }

    const input_useremail =(event)=>{
        console.log('input email', event.target.value);
        setuseremail(event.target.value)
    }

    const input_userpassword =(event)=>{
        console.log('input input_userpassword', event.target.value);
        setuserPassword(event.target.value)
    }



    const handlesubmit =(event)=>{
        event.preventDefault();
        console.log('form submit clicked...')
        setformstatus(true)
    }



    return(
        <>
        <form>
        <h2>Resisstation form</h2>
        <br></br><br></br>
        Name:
        <input type="text" name="name" onChange={input_username}/><br></br>
        Email:
        <input type="email" name="email" onChange={input_useremail}/><br></br>
        Password:
        <input type="Password"name="Password" onChange={input_userpassword}/><br></br>
        <button onClick={handlesubmit}>Submit</button>
        {formstatus && <div>Form Succesfully Submitted</div>}
        </form>
        </>
    )
}
export default Formfn;