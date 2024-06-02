import React from 'react'

const Tile = ({skill, icon}) => {
  return (
    <div className='flex justify-center items-center p-5 bg-blue-950 gap-4'>
        {icon}
        <p className=' text-white'>{skill}</p>
    </div>
  )
}

export default Tile