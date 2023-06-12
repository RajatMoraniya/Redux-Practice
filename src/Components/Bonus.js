import React from 'react'
import {incrementP} from '../actions'
import { useSelector , useDispatch } from 'react-redux'

function Bonus() {
    const bonus = useSelector(state=>state.bonus)
    const dispatch = useDispatch();
  return (
    <> 
        <div>Bonus Points : {bonus.pending ? <p>Loading</p> : bonus.error ? <p>{bonus.error}</p> : bonus.points} </div>
        <button onClick={()=>{dispatch(incrementP())}}>Increase+</button>
    </>
  )
}

export default Bonus