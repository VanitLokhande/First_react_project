import React, { Fragment } from "react";


class Cricketchild extends React.Component{
    constructor(props){                                                                     
        super(props);

    }
    render(){
        return(
            <>
            <div>Newton School</div>
            <div>count-{this.props.count_temp}</div>
            <div>Name-{this.props.name_temp}</div>
            </>

        )
    }
}
export default Cricketchild;