import React from 'react'

export default function Image (props) {
  const { image, className } = props

  return (
    <>
      <img className={className} src={`/images/${image}`}  />
    </>
  )
}
