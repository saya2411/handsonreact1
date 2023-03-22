import React from 'react'
import './FuncComp.css'


export default function FuncComp() {
  return (
    <div className='funcdiv'>
      <h1>This is using Functional Component</h1>
      <p>This is done using external CSS</p>
      <p style={{color:'blue'}}>This is done using inline CSS</p>
    </div>
  )
}
