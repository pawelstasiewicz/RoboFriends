import React from 'react'
import './MainComponent.css'
import CardListComponent from '../../molecules/CardListComponent/CardListComponent'
import { robots } from '../../../data/robots'

function MainComponent() {
  
 
  return (
    <div className='mainStyle'>
        <CardListComponent robots={robots}/>
    </div>
  )
}

export default MainComponent