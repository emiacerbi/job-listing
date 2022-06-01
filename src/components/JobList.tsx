import React, { useState } from 'react'
import { JobCard } from './JobCard'
import cross from '../../public/assets/icon-remove.svg'

export const JobList = () => {
  const [arrayOfFilters, setArrayOfFilters] = useState<string[]>([])

  const removeFilter = (selectedFil: string) => {
    setArrayOfFilters(arrayOfFilters.filter(fil => fil !== selectedFil))
  }

  return (
    <main className='flex flex-col px-3'>
      {
        arrayOfFilters.length > 0 && (
          <div className='flex gap-3 items-center p-3 mx-auto mt-10 min-w-[250px] max-w-[900px] bg-white rounded-sm shadow-customShadow'>
            <div className='flex flex-row flex-wrap gap-3'>
              {
                arrayOfFilters.map(el => (
                  <p className='flex overflow-hidden gap-2 items-center pt-0.5 pl-3 font-bold text-teal-600 bg-teal-50 rounded-md' key={el}>{el}
                    <img className='p-2 bg-teal-600 hover:bg-neutral-800 cursor-pointer' src={cross} alt='cross' onClick={() => removeFilter(el)} />
                  </p>)
                )
              }
            </div>
            <div className='ml-auto'>
              <p
                className='font-bold text-gray-500 cursor-pointer'
                onClick={() => setArrayOfFilters([])}
              >
                  Clear
              </p>
            </div>
          </div>
        )
      }

      <JobCard arrayOfFilters={arrayOfFilters} setArrayOfFilters={setArrayOfFilters} />
    </main>
  )
}
