/**
 * @file Result component
 */

import React from 'react'

/**
 * @param {object} props - props passed into the component
 * @param {string} props.option - question text
 * @param {number} props.totalVotes - total votes for question
 * @param {boolean} props.selected - true if authenticated user has selected question
 */
export default function Result ({ option, totalVotes, selected }) {
  const votes = option.votes.length
  const percentage = (votes / totalVotes * 100).toFixed(1)

  return (
    <div className={`result border border-gray-200 rounded py-4 px-5 mb-5 ${selected && 'result--selected'}`}>
      <p className='text-sm text-gray-800 mb-2'>Would you rather {option.text}?</p>
      <div className='w-full h-5 relative bg-gray-400'>
        <div className='bg-black absolute inset-y-0 left-0 z-10 text-white text-sm' style={{ width: `${percentage}px`} }>
          <span className='px-2'>{percentage}%</span>
        </div>
      </div>
      <p className="text-sm text-gray-800 mt-2">{votes} out of {totalVotes}</p>
      <div className="result__your-vote">
        <div>
          Your Vote
        </div>
      </div>
    </div>
  )
}
