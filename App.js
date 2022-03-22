import React, {useState} from 'react'
import './index.css'

const App = () => {
  const [count, setCount] = useState(0)
  const [dark, setDark] = useState(false)

//create working constructors
const decrement = () => {
  setCount(count -1)
}
const increment = () => {
  setCount(count +1)
}
const bigDecrement = () => {
  setCount(count -5)
}
const bigIncrement = () => {
  setCount(count +5)
}
const toggleDark = () => {
  setDark(!dark)
}
const reset = () => {
  setCount(0)
}
const blockStyles ={
  background: dark ? 'black':'white',
  width: '300px',
  height: '300px',
  position: 'absolute',
  top: '40%',
  left: '50%',
  transform: 'translate(-50%,-50%)',  
}
return (
  <div className = 'App'>
    <button onClick={decrement}>Minus 1</button>
    <button onClick={increment}>Add 1</button>
    <button onClick={bigDecrement}>Minus 5</button>
    <button onClick={bigIncrement}>Add 5</button>
    <button onClick={toggleDark}>Toggle Dark</button>
    <button onClick={reset}>Click if you dare!</button>
    <br/>

    <span>Dark mode is {dark ? 'ON':'OFF'}</span>
    <div style = {blockStyles}> Count is at: {count} 
    </div>
  </div>
)    
}

export default App;
