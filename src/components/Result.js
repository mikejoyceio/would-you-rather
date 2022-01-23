import React from 'react'

export default function Result (props) {
  const { option, totalVotes, selected } = props
  const votes = option.votes.length
  const percentage = (votes / totalVotes * 100).toFixed(1)

  return (
    <div className={`result ${selected && 'result--selected'}`}>
      <p>Would you rather {option.text}?</p>
      <div className='w-full h-5 relative bg-gray-400'>
        <div className='bg-black absolute inset-y-0 left-0 z-10 text-sky-700' style={{ width: `${percentage}px`} }>
          {percentage}%
        </div>
      </div>
      <p>{votes} out of {totalVotes}</p>
    </div>
  )
}
