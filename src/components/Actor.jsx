import React from 'react'
import { useLocation, useParams } from 'react-router-dom'

const Actor = () => {
 
    const location = useLocation()
    const {state} = location
  return (
    <div><img width={150} src={state.actor.actorImage} alt="" /></div>
  )
}

export default Actor