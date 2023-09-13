import React, { Component } from "react";

class Testchild extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div>{this.props.Name_temp}</div>
        )
    }
}
export default Testchild;