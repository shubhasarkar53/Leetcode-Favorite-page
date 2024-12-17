import React from 'react'



function FeaturedIcon({icon,className=""}) {
  return (
    <div className={`w-[80px] h-[80px] bg-white-primary rounded-md flex items-center justify-center ${className}`}>
        <div className='w-[70%] h-[70%]'>
        {icon}

        </div>
    </div>
  )
}

export default FeaturedIcon