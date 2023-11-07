import React from 'react'
import { useState } from 'react'

function SearchBoxComponent({sendValue}) {
  const [inputValue, setInputValue] = useState('')

  function InputValue(event){
    setInputValue(event.target.value)
    sendValue(inputValue)
  }

  return (
    <>
      <input type='search' placeholder='search robots' onChange={InputValue}/>
    </>
  )
}

export default SearchBoxComponent