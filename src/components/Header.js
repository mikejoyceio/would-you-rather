/**
 * @file Header component
 */

import React from 'react'
import Nav from './Nav'
import UserMenu from './UserMenu'

function Header() {
  return (
    <header>
      <div className='bg-white shadow-md rounded border px-10 mt-10 container mx-auto'>
        <div className='flex items-center justify-between'>
          <Nav />
          <UserMenu />
        </div>
      </div>
    </header>
  )
}

export default Header
