import React, { Component, useEffect } from 'react'

class Ups_child extends Component{
  constructor(props){
    super(props)
   
    console.log(this.props.childcount);
    
   
  }
 render(){
  return(
    <>
     <h1>Ups_child</h1> 
     <div>{this.props.child_count}</div>
    
    </>
  )
 }
}

export default Ups_child;
