import React, { useState } from 'react'
import { JobCard } from './JobCard'

export const JobList = () => {
  const [arrayOfFilters, setArrayOfFilters] = useState<string[]>([])

  return (
    <main className='flex flex-col gap-5'>
      <div>{arrayOfFilters.map(el => <span key={el}> {el}</span>)}</div>
      <JobCard arrayOfFilters={arrayOfFilters} setArrayOfFilters={setArrayOfFilters} />
    </main>
  )
}
