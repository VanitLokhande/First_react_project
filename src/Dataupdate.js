import React,{Component} from "react";



class Dataupdate extends Component{
    constructor(){
        super()
        this.state={
            name:'vanit'
        }
        // this.dataupdat=this.dataupdat.bind(this)
    }
    dataupdat (){
        this.setState({name:this.state.name='Ravikant'});

    }
    render(){
        return(
            <>
            <div>{this.state.name}</div>
            <button onClick={this.dataupdat} >dataupdate</button>
            <div>jjjjj</div>
            </>

        )
    }
}
export default Dataupdate;