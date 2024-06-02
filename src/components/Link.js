import React from 'react'
import { Link as RLink } from 'react-router-dom'

const Link = ({ href, children, isActive }) => {
  return (
    <RLink to={href} className={`${isActive ? "text-green-500 nav-active" :  "nav-item"} text-xl `}>{children}</RLink>
  )
}

export default Link