import logo from './logo.svg';
import './App.css';
import Account from './Components/Account';
import Bonus from './Components/Bonus';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { getUser } from './actions';
function App() {
  const [value , setValue] = useState();
  const account = useSelector(state=>state.account)
  const bonus = useSelector(state=>state.bonus)
  const dispatch = useDispatch();
  return (

    <div className="App">
      <input type="number" value={value} onChange={(e)=>setValue(e.target.value)} />
      <button onClick={()=>dispatch(getUser(value))}>Init User</button>
      <h3>Current Account Ammount  : {account.pending ? <span>Loading</span> : account.error ? <p>{account.error}</p> : account.ammount} </h3>
      <h3>Total Bonus Points :{bonus.pending ? <span>Loading</span> : bonus.error ? <p>{bonus.error}</p> : bonus.points} </h3>
      <Account />
      <Bonus />
    </div>
  );
}

export default App;
