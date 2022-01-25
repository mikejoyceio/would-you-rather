import React from 'react'

export default function Image (props) {
  const { image, className, alt } = props

  return (
    <>
      <img className={className} src={`/images/${image}`} alt={alt} />
    </>
  )
}
