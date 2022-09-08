import React, { useState } from 'react';

const NewComponent = () => {
  const [input, setInput] = useState('')
  let counter = 0

  //1. Build Form, Input, Submit Button
  //2. Create state variables
  //3. Build function hanldeChange 
  //4. build function handleSubmit
  const handleSubmit = e => {
    e.preventDefault()
    counter += input.length
  }

  // When a person types in the input, the dom should immediately reflect how many characters have been typed. When the submit button is clicked an alert should fire saying we have received your message: “message”
  // 1. Build a form that will show up on each movie card and will add a comment to the card


  const handleChange = e => {
    console.log(e.target.value)
    setInput(e.target.value)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Type Here...' onChange={handleChange}/>
        <input type="submit" value='Click Me'/>
        <h3>{ counter }</h3>
      </form>
    </div>
  )

}

export default NewComponent