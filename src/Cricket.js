import React,{Component,Fragment} from 'react';
import Cricketchild from './Cricketchild';



class Cricket extends Component {
    constructor(){
        super();
        this.state = {
            count: 0
        }

    }
    increament = ()=>{
        this.setState({
            count:this.state.count + 1
        })
    }

    render(){
        let name='Vanit'
        return(

            <>
                <h1>Cricket</h1>
                <div>
                count-{this.state.count}<br></br>
                <button className='btn btn-dark' onClick={this.increament}>increase</button>
                </div>
                <Cricketchild count_temp={this.state.count} name_temp={name}/>
            </>
        )
    }


}
export default Cricket;