import React from 'react'

function Heading({variant="h2",text="", className="",children}) {

const baseStyles = "font-medium text-[32px] text-white-primary"
const variantStyles= {
    h1:"text-5xl font-bold",
    h2:"font-medium text-[32px]",
    h3:"font-semibold text-2xl",
    h4:"font-semibold text-sm"
}

  return (
    <h2 className={`${baseStyles} ${variantStyles[variant]} ${className}`}>{text=="" ? children : text}</h2>
  )
}

export default Heading