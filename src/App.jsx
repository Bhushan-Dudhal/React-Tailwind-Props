import { useState } from 'react'

import './App.css'
import Card from './components/Card'

function App() {

  let myObj = {
    username: "bhushan",
    age: 19
  }
  let newArr =[1,2,3,4]


  return (
    <>
      <h1 className='bg-green-600 text-black p-4 rounded-xl '>tailwind text</h1>
      
      <Card username="chaiaurcode" btnText="click me" />
        <Card  username="bhushan"  btnText="visit me" />
         
    </>
  )
}

export default App
