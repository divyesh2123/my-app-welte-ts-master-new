import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

import data1, {Employee} from './IEmployee';

function App() {

 const [data,setData]= useState<number>(0);

 const changeValue = ()=> {

  setData(data+1);
 }

  return (
    <div className="App">
    {
      data1.map((value:Employee)=> {

        return(<div>{value.Name}</div>)
      })
    }

    <button onClick={changeValue}>+</button>
    </div>
  );
}

export default App;
