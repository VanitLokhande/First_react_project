import React, { Component } from "react";
import Testchild from './Testchild'

class Test extends Component{
    constructor(){
        super()
        
        this.state={
            name:"Hello"

        }

       
        
        
    }
    
    clickHandler =()=>{
        this.setState({
        name:"world"
        })
            
    }
   
    
    render(){
        return(
            
            <div>
                <div>{this.state.name}</div>
                <button onClick={this.clickHandler}>Change</button>
            </div>
        )
    }
}
export default Test;
           
            

            

