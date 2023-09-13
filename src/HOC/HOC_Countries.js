import React from "react";
import HOC_Filter from "./HOC_Filter";



const countries_list=['India', 'USA', 'Ukraine', 'Nepal', 'Sri Lanka', 'Pakistan', 'UK', 'Poland', 'UAE']
class HOC_Countries extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <>
            {this.props.list && this.props.list.map((item)=>(
        <div>{item}</div>))}
            </>
        )
    }
    
}

export default HOC_Filter(HOC_Countries, countries_list) ;