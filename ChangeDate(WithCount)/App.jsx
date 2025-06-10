import React, { useState } from 'react';
import './App.css'
function App(){
  let [cnt,setcount]=useState(0);
  let count=0;
  let date=new Date();
  date.setDate(date.getDate()+ cnt);
  return (
    <header>'<button onClick={(e)=>{
      console.log("Hello",count++);
      setcount(cnt+1);
    }}>+</button>
    <p> count ={cnt}</p>
    <button onClick={(e)=>{
      console.log(("Hello",count--));
      setcount(cnt-1);
    }}>-</button>
    <div>
      <p>{date.toDateString()}</p>
    </div>
    </header>
  )
}

export default App
