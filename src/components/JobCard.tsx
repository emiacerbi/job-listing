import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'
import data from '../data/data.json'
import { Job } from '../types/types'

interface Props {
  arrayOfFilters: string[]
  setArrayOfFilters: Dispatch<SetStateAction<string[]>>
}

export const JobCard = ({ arrayOfFilters, setArrayOfFilters } : Props) => {
  const [cardData, setCardData] = useState<Job[]>([])

  useEffect(() => {
    setCardData(data)
  }, [])

  return (
    <>
      {
        cardData
          .filter(job => {
            const tags = [...job.tools, ...job.languages, job.role, job.level]
            return arrayOfFilters.every(filter => tags.includes(filter))
          })
          .map(job => {
            const { id, company, role, position, postedAt, contract, location, tools, level, languages } = job
            return (
              <article key={id} className='p-3 mt-5 shadow-md'>
                <p className='inline mr-3 font-bold text-teal-600'>{company}</p>
                {
                  job.new &&
                   <span className='px-2 pt-2 pb-1 ml-2 text-neutral-50 bg-teal-600 rounded-xl'>
                     NEW!
                   </span>
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
                <div className='flex flex-wrap gap-2 pt-3 font-bold text-teal-600' >
                  <span
                    className='p-1 bg-teal-50 cursor-pointer'
                    onClick={() => setArrayOfFilters(prevFilters => [...prevFilters, role])}
                  >{role}</span>
                  {
                    tools
                      .map(tool => (
                        <span
                          key={tool}
                          className='p-1 bg-teal-50 cursor-pointer'
                          onClick={() => setArrayOfFilters(prevFilters => [...prevFilters, tool])}
                        >
                          {tool}
                        </span>))
                  }
                  <span
                    className='p-1 bg-teal-50 cursor-pointer'
                    onClick={() => setArrayOfFilters(prevFilters => [...prevFilters, level])}
                  >{level}</span>
                  {
                    languages
                      .map(lang => <span onClick={() => setArrayOfFilters(prevFilters => [...prevFilters, lang])} key={lang} className='p-1 bg-teal-50 cursor-pointer'>{lang}</span>)
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
