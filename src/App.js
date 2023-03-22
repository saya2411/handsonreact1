import { useState } from 'react';
import './App.css';
import ClassComp from './Components/ClassComp';
import FuncComp from './Components/FuncComp';

function App() {
  const [count,setCount]= useState(false);
  const [data,setData]= useState(false);
          // state variable  //state function   //initial value of state variable

          // functionClick : false
          // setfunctionClick(functionClick)

  const handleFunction =()=>{
    setCount(!count)
    // console.log(count)
  }
  const handleClass =()=>{
    setData(!data)
    // console.log(count)
  }
  return (
    <div className='background'>
      <h1 className='head'>Styling using Functional and Class Component</h1>
      <button onClick={handleFunction} className='function'>To see styling in Functional Component</button>

      <button onClick={handleClass} className='class'>To see styling in Class Component</button>
      
     <div className="container">
      <div className="fun">{count ? <FuncComp/> : null }</div>
      <div className="classfun">{data ? <ClassComp/> : null }</div>
     </div>
    </div>
    
  );
}

export default App;
