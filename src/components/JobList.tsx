import React, { useState } from 'react'
import { JobCard } from './JobCard'

export const JobList = () => {
  const [arrayOfFilters, setArrayOfFilters] = useState<string[]>(['React', 'Frontend'])

  return (
    <main className='flex flex-col gap-5'>
      <JobCard arrayOfFilters={arrayOfFilters} setArrayOfFilters={setArrayOfFilters} />
    </main>
  )
}
