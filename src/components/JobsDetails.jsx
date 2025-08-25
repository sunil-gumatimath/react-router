import React from 'react'
import { useLoaderData } from 'react-router-dom'


const JobsDetails = () => {

    const jobDetails = useLoaderData();

  return (
    <div className='job-details'>
        <p><b>Job Title: </b>{jobDetails.title}</p>
        <p><b>Salary: </b>{jobDetails.salary}</p>
        <p><b>Job Location: </b>{jobDetails.location}</p>
        <p><b>Description: </b>"We are looking for a passionate and skilled professional to join our dynamic team. 
        The ideal candidate should have strong technical expertise, excellent problem-solving abilities, and a collaborative mindset. 
        You will be responsible for contributing to high-quality projects, working with cross-functional teams, 
        and ensuring timely delivery of solutions that meet client needs."</p>
        <button>Apply Now</button>
    </div>
  )
}

export default JobsDetails