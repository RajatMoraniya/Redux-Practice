import React, { useState } from 'react';
import {increment,decrement,incrementByAmt} from '../actions'
import { useSelector, useDispatch  } from 'react-redux';

function Account() {
    const account = useSelector(state=>state.account)
    const [value , setValue] = useState();
    const dispatch = useDispatch();

  return (
    <>
        <div>Account Balance : {account.pending ? <p>Loading</p> : account.error ? <p>{account.error}</p> : account.ammount} </div>
        <button onClick={()=>dispatch(increment())}>Increment</button>
        <button onClick={()=>dispatch(decrement())}>Decrement</button>
        <input type="number" value={value} onChange={(e)=>{setValue(e.target.value)}}/>
        <button onClick={()=>{dispatch(incrementByAmt(Number.parseInt(value)))}}>Incease By Amt</button>
    </>
  )
}

export default Account