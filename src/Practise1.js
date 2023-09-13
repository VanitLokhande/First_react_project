import React,{useState} from "react";


const Practise1 =()=>{
  const[first,setfirst]=useState();
  const[second,setsecond]=useState();
  const[add,setadd]=useState();
  const[sub,setsub]=useState();
  const[multi,setmulti]=useState();
  const[showans,setshowans]=useState(false);

  const handlefirst =(event)=>{
    setfirst(event.target.value)
    console.log(event.target.value)
  }
  const handlesecond =(event)=>{
    setsecond(event.target.value)
    console.log(event.target.value)
  }

  const handleadd =()=>{
    const add = (first)+(second);
    setadd(add);
    setshowans(true);

  }

  const handlesub =()=>{
    setsub(first-second);
    setshowans(true);

  }

  const handlemulti =()=>{
    setmulti(first * second);
    setshowans(true);

  }

 
   
  
    return(
        <>first no-
        <input type="number" value={first} onBlur={handlefirst}/>
        <br></br><br></br>
        Secound no-
        <input  type="number"  value={second} onBlur={handlesecond} />
        <br></br><br></br><br></br>

        <button onClick={handleadd}>Add</button>
        <button onClick={handlesub}>sub</button>
        <button onClick={handlemulti}>multi</button>

        <br></br><br></br>
        {showans && <div>{add}</div>}
        {showans && <div>{sub}</div>}
        {showans && <div>{multi}</div>}
        


        
    
        </>
    )
}
export default Practise1;