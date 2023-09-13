import React from "react";


const HOC_Filter =(InputComponent, data)=>{
    class output extends React.Component{
        constructor(props){
            super(props);
            this.state={
                tempinput: '',
                orglist: data,
                filterlist: data, 
            }
                
            

        }

        filterFunc =(event)=>{
            console.log('inside filter fn...', event.target.value);
            const tempArr = this.state.orglist.filter((item)=>{
                return item.indexOf(event.target.value) >= 0;
            })

            this.setState({
                tempinput:event.target.value,
                orglist: data,
                filterlist: tempArr,
            })

        }
        
        render(){
            return(
                <>
                <input type="text" onChange={(e) => this.filterFunc(e)}/>
                <InputComponent list={this.state.filterlist}/>
                </>
            )
        }
    }
    return output;
    
}
export default HOC_Filter;