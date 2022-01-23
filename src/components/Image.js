import React from 'react'

export default function Image (props) {
  const { image, className } = props

  console.log(image)

  return (
    <>
      <img className={className} src={`/images/${image}`}  />
    </>
  )
}
