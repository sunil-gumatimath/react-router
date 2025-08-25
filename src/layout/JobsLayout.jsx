import React from 'react'
import { Outlet } from 'react-router-dom'

const JobsLayout = () => {
  return (
    <div>
        <h1>Job Openings</h1>
        <p>List of current job opening in out company.</p>
        <Outlet/>
    </div>
  )
}

export default JobsLayout