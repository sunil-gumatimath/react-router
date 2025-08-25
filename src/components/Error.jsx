import React from 'react'
import { useNavigate, useRouteError } from 'react-router-dom'

const Error = () => {

    const error = useRouteError();
    const navigator = useNavigate();

  return (
    <div className='job-details'>
        <h3>An Error occurred.</h3>
        <p>{error.message}</p>
        <button onClick={()=>navigator('/')}>Go to homepage</button>
    </div>
  )
}

export default Error