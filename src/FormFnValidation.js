
import React ,{useState} from "react";

const FormFnValidation =()=>{
    
        const [formStatus, setFormStatus] = useState(false);
        const initialValues = {username: '', email: '', password: ''};
        const [formdata, setformdata] = useState(initialValues);
        const [formErrors, setFormErrors] = useState({});



        const handleChange =(event)=>{
            console.log('event', event.target.value, event.target.name);
            setformdata({...formdata, [event.target.name]:event.target.value})
        }

        const handlesubmit =(event)=>{
            event.preventDefault();
            console.log('FormData Submitted...', formdata);
            const errorRet = Validation(formdata);
            setFormErrors(errorRet);
            if(Object.keys(errorRet).length === 0){
                setFormStatus(true)
                console.log('--------------hahah------------------')
                setformdata(initialValues)

            }
        }


        const Validation =(form_data)=>{
            let error ={};
            if(!form_data.username){
                error.username = 'Please, enter username...'
            }

            if(!form_data.email){
                error.email = 'Please, enter email...'
            }

            if(!form_data.password){
                error.password = 'Please, enter password...'
            }

            if(!form_data.email.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)){
                error.email = 'Please, enter Validemail...'
            }

            if(form_data.password.length < 10){
                error.password = 'Please enter 10 characters  ...'
            }
            return error;


            
        };


        






    return(
        <>
        <form>
        <h2>Resisstation form</h2>
        <br></br><br></br>
        Name:
        <input type="text" name="username" onChange={handleChange}/>
        <div>{formErrors.username}</div>
        <br></br>
        Email:
        <input type="email" name="email" onChange={handleChange}/>
        <div>{formErrors.email}</div>
        <br></br>
        Password:
        <input type="Password"name="password" onChange={handleChange}/>
        <div>{formErrors.password}</div>
        <br></br>
        <button type="submit"onClick={handlesubmit}>Submit</button>
        
        </form>
        {formStatus && <div>Form Succesfully Submitted</div>}
        </>
    )
}

export default FormFnValidation;