import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {

  let myObj = {
    username: "kulkarni",
    age: 21
  }

  let newArr = [1,2,3]
  

  return (
    <>
     <h1 className='bg-green-400 text-black rounded-xl p-4 mb-9'>Tailwind</h1>
   
     <Card username="SSK" btnText="click me" />
      <Card username="Shrinivas" btnText="visit me" />

    </>
  )
}

export default App
