import React from 'react'
import { Link, Outlet, useLocation, useParams } from 'react-router-dom'

const MovieDetails = () => {
    const location = useLocation()
    const {state} = location

  return (
    <div>
        <div style={{position:'absolute',top:20,right:20}}><Outlet/></div>
        <h1>{state?.title}</h1>
        <img width={300} src={state?.imageUrl} alt={state?.title}/>
        <p>{state?.description}</p>
        <ul>{state?.actors?.map((actor,i)=><li key={i}>
            <Link to={`actor/${i}`} state={{...state,actor}}>{actor.name}</Link> 
        </li>)}</ul>
        
    </div>
  )
}

export default MovieDetails