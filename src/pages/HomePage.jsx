import React from 'react'
import MainComponent from '../components/organisms/MainComponent/MainComponent'
import HeaderComponent from '../components/organisms/HeaderComponent/HeaderComponent'
import { useState } from 'react'

function HomePage() {
 
  function updateName(){
    
  }

  return (
  <>
    <HeaderComponent sendingValue={updateName}/>
    <MainComponent/>
    <div>HomePage</div>
  </>
  )
}

export default HomePage