import React, { useEffect, useState } from 'react'
import data from '../data/data.json'
import { Job } from '../types/types'

export const JobCard = () => {
  const [cardData, setCardData] = useState<Job[]>([])

  useEffect(() => {
    setCardData(data)
  }, [])

  console.log(cardData)
  return (
    <>
      {
        cardData
          .map(job => {
            const { id, company, role, position, postedAt, contract, location, tools, level, languages } = job
            return (
              <article key={id} className='mt-5'>
                <p className='inline mr-3 font-bold text-teal-600'>{company}</p>
                {
                  job.new &&
                   <span className='px-2 pt-2 pb-1 ml-2 text-neutral-50 bg-teal-600 rounded-xl'>NEW!</span>
                }
                {
                  job.featured &&
                    <span className='px-2 pt-2 pb-1 ml-2 text-neutral-50 bg-neutral-800 rounded-xl'>FEATURED</span>
                }
                <p className='mt-1 font-bold'>{position}</p>
                <div className='flex gap-2 pb-2 text-gray-500 border-b border-gray-300 '>
                  <span className='text-gray-500'>{postedAt} ·</span>
                  <span className='text-gray-500'>{contract} ·</span>
                  <span className='text-gray-500'>{location}</span>
                </div>
                <div className='flex gap-2 pt-3 font-bold text-teal-600' >
                  <span className='p-1 bg-teal-50'>{role}</span>
                  <span className='p-1 bg-teal-50'>{tools}</span>
                  <span className='p-1 bg-teal-50'>{level}</span>
                  {
                    languages
                      .map(lang => <span key={lang} className='p-1 bg-teal-50'>{lang}</span>)
                  }
                </div>
              </article>
            )
          }
          )
      }
    </>
  )
}
