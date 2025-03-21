import React, { useState, useEffect } from 'react'

const Counter = () => {

  const [counter, setCounter] = useState(0)
  const [operation, setOperation] = useState('')

  const handleClick = e => {
    setOperation(e.target.textContent)
  }

  useEffect(() => {
    let interval = null

    if(operation === '+') {
      interval = setInterval(() => {
        setCounter(counter + 1)
      }, 1000)
    } else if(operation === '-') {
      interval = setInterval(() => {
        setCounter(counter - 1)
      }, 1000)
    }     
    return () => clearInterval(interval)
  }, [operation, counter])

  return (
    <div>
      <h3>{counter}</h3>
      <button onClick={handleClick}>+</button>
      <button onClick={handleClick}>-</button>
      <button onClick={handleClick}>Pause</button>
    </div>
  )
}

export default Counter