import React, { useReducer } from "react";


const UseReducer=()=>{
    const initialvalues={
        transactions:1,
        balance:1000,
        show:false

    }
    const reducer=(state, action)=>{
        switch(action.type){
            case 'TRANSACTIONS':
                return{
                    transactions:state.transactions+1,
                    balance:state.balance,
                    show:state.show
                }
                case 'INCREMENT':
                return{
                    transactions:state.transactions+1,
                    balance:state.balance+1000,
                    show:state.show
                }

                case 'SHOW':
                    return{
                        transactions:state.transactions+1,
                        balance:state.balance+5000,
                        show: !state.show
                    }

                    default:
                        return state
        }

    }
    const[state, dispach]=useReducer(reducer, initialvalues);

   
    return(
        <>
        <h1>UseReducer</h1>
        <button onClick={()=> dispach({type: 'TRANSACTIONS'})}>No of transactions</button>
        <button onClick={()=> dispach({type: 'SHOW'})}>show balance</button>
        <button onClick={()=> dispach({type: 'INCREMENT'})}>increament balance</button>
        <br></br>
        <div>Balance-{state.balance}</div>
        <div>transactions-{state.transactions}</div>
        <div>{state.show && <div>Mission Suceesfull</div>}</div>
        </>
    )
}

export default UseReducer;