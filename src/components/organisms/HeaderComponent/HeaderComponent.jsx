import React from 'react'
import './HeaderComponent.css'
import TitleComponent from '../../atoms/TitleComponent/TitleComponent'
import SearchBoxComponent from '../../atoms/SearchBoxComponent/SearchBoxComponent'
import { useState } from 'react'

function HeaderComponent({sendingValue}) {

  const [robotName, setRobotName] = useState()

  function sendValue(event){
    setRobotName(event)
    sendingValue(robotName)
  }

  return (
    <div>
        {robotName}
        <TitleComponent/>
        <SearchBoxComponent sendValue={sendValue}/>
    </div>
  )
}

export default HeaderComponent