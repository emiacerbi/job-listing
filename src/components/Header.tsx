import React from 'react'

// import heroMobile from '../../public/assets/bg-header-mobile.svg'
// import heroDesktop from '../../public/assets/bg-header-desktop.svg'

export const Header = () => {
  return (
    <div className='bg-teal-600 ' >
      <picture className='w-full'>
        <source media='(max-width: 400px)' srcSet='bg-header-mobile.svg' />
        <source media='(min-width: 401px)' srcSet='bg-header-desktop.svg' />
        <img src='bg-header-desktop.svg' alt='hero' className='w-full' />
      </picture>
    </div>
  )
}
