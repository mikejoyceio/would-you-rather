/**
 * @file Image component
 */

import React from 'react'

/**
 * @param {object} props
 * @param {string} props.image - image file name
 * @param {string} props.className - img class name/s
 * @param {string} props.alt - alt text
 */
export default function Image ({ image, className, alt }) {
  return (
    <>
      <img className={className} src={`/images/${image}`} alt={alt} />
    </>
  )
}
