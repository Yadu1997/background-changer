
import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'

function App() {
 const[color,setColor]=useState(null)
 const btClick=(col)=>{
  setColor(col)
 }
 useEffect(()=>{
  document.body.style.backgroundColor=color
 },[color])

  return (
    <>
     <div style={{minHeight:'100vh'}} className='d-flex flex-column justify-content-center align-items-center'>
      <h1 className='mb-5'>CLICK TO CHANGE BACKGROUND</h1>
      <div>
        <button onClick={()=>{btClick('red')}} style={{width:'70px',height:'45px'}} className='btn btn-danger me-5'>Red</button>
        <button onClick={()=>{btClick('green')}} style={{width:'70px',height:'45px'}} className='btn btn-success me-5'>Green</button>
        <button onClick={()=>{btClick('blue')}} style={{width:'70px',height:'45px'}} className='btn btn-primary'>Blue</button>
      </div>
     </div>
    </>
  )
}

export default App
