import { useState } from 'react'

import './App.css'

function App() {
  const [counter, setCounter] = useState(15);

  const addValue = () => {
       setCounter((prevCounter) => {
      const newCounter = prevCounter + 1;
      if (newCounter > 20) {
        alert("Value cannot be more than 20");
        return prevCounter; // Do not update the state
      }
      return newCounter; // Update the state
    });
  };

  const removeValue = () =>{
    console.log("clicke", counter);
    if(counter <= 0){
      alert("Value cant be negative ")
    } else{
      setCounter(counter-1);
    }
    
 }

  return (
    <>
      <h1>Chai or react</h1>
      <h2>Counter Value: {counter}</h2>

      <button onClick={addValue}>Add value</button>
      <br />
      <button onClick={removeValue}>remove value</button>
    </>
  )
}

export default App
