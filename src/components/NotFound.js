/**
 * @file NotFound component
 */

import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound () {
  return (
    <div className='text-center'>
      <p className='text-4xl font-bold mt-28 mb-10'>
        404 Not Found
      </p>
      <Link to='/' className='text-blue-400'>Back to Home</Link>
    </div>
  )
}
