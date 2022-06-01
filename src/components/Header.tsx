import React from 'react'

import heroMobile from '../../public/assets/bg-header-mobile.svg'
import heroDesktop from '../../public/assets/bg-header-desktop.svg'

export const Header = () => {
  return (
    <div className='bg-teal-600' >
      <picture>
        <source media='(max-width: 400px)' srcSet={heroMobile} />
        <source media='(min-width: 401px)' srcSet={heroDesktop} />
        <img src={heroDesktop} alt='hero' />
      </picture>
    </div>
  )
}
