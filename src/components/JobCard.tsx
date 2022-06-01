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
    <section className='flex flex-col gap-7 mt-5 mb-10'>
      {
        cardData
          .filter(job => {
            const tags = [...job.tools, ...job.languages, job.role, job.level]
            return arrayOfFilters.every(filter => tags.includes(filter))
          })
          .map(job => {
            const { id, company, role, position, postedAt, contract, location, tools, level, languages, logo } = job
            return (
              <article
                key={id}
                className='
                  relative
                  p-5 pt-10 mt-5
                  bg-white rounded-md shadow-customShadow
                  md:flex
                  md:gap-5 md:items-center
                  md:p-5
                  lg:mx-auto
                  lg:min-w-[900px]'
              >
                {
                  // Featured line
                  job.featured &&
                    <div className='absolute top-0 left-0 w-1 h-full bg-teal-600 rounded-l-md md:w-1.5'></div>
                }
                <img width={50} src={logo} alt='logo' className='absolute -top-6 md:hidden'/>

                {/* Col 1 */}
                <div>
                  <img src={logo} alt='logo' className='hidden md:block' />
                </div>

                {/* Col 2 */}
                <div>
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
                  <p className='mt-3 font-bold'>{position}</p>
                  <div className='flex gap-2 pb-2 mt-2 text-gray-500 border-b border-gray-300 md:pb-0 md:border-none'>
                    <span className='text-gray-500'>{postedAt} ·</span>
                    <span className='text-gray-500'>{contract} ·</span>
                    <span className='text-gray-500'>{location}</span>
                  </div>
                </div>

                {/* Col 3 */}
                <div className='ml-auto'>
                  <div className='flex flex-wrap gap-2 pt-3 font-bold text-teal-600 md:ml-auto' >
                    <span
                      className='py-1 px-2 hover:text-neutral-100 bg-teal-50 hover:bg-teal-600 rounded-sm cursor-pointer'
                      onClick={() => setArrayOfFilters(prevFilters => prevFilters.indexOf(role) === -1
                        ? [...prevFilters, role]
                        : [...prevFilters])}
                    >{role}</span>
                    {
                      tools
                        .map(tool => (
                          <span
                            key={tool}
                            className='py-1 px-2 hover:text-neutral-100 bg-teal-50 hover:bg-teal-600 rounded-sm cursor-pointer'
                            onClick={() => setArrayOfFilters(prevFilters => prevFilters.indexOf(tool) === -1
                              ? [...prevFilters, tool]
                              : [...prevFilters])}
                          >
                            {tool}
                          </span>))
                    }
                    <span
                      className='py-1 px-2 hover:text-neutral-100 bg-teal-50 hover:bg-teal-600 rounded-sm cursor-pointer'
                      onClick={() => setArrayOfFilters(prevFilters => prevFilters.indexOf(level) === -1
                        ? [...prevFilters, level]
                        : [...prevFilters])}
                    >{level}</span>
                    {
                      languages
                        .map(lang =>
                          <span
                            onClick= {() => setArrayOfFilters(prevFilters => prevFilters.indexOf(lang) === -1
                              ? [...prevFilters, lang]
                              : [...prevFilters])} key={lang} className='py-1 px-2 hover:text-neutral-100 bg-teal-50 hover:bg-teal-600 rounded-sm cursor-pointer'>{lang}
                          </span>)
                    }
                  </div>
                </div>
              </article>
            )
          }
          )
      }
    </section>
  )
}
