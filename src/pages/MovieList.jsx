import React from 'react'
import { Link, Outlet, useParams } from 'react-router-dom'

const MovieList = ({ movies }) => {
  
    return (<div style={{display:'flex'}}>
        <div style={{ width: "50%" }}>
            {movies.map((el, i) => <h1 key={i}>
                <Link to={`/movie/${i}`} state={el}>{`${i} ${el.title}`}</Link>
            </h1>)}
        </div>

        <div style={{ width: "50%" }}>
            <Outlet />
        </div>
    </div>
    )
}

export default MovieList