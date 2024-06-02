import React from 'react'

const Education = () => {
  return (
        <div className=' h-screen bg-[#010e1b] text-white flex flex-col items-center pt-8 '>
            <div className=' flex flex-col align-middle justify-center gap-10  w-2/5'>
                <h4 className=' text-2xl'>Education----------</h4>
                <div className=' text-white tile-container flex flex-row gap-10'>
                    <img className=' w-80' src="https://scoonews.com/wp-content/uploads/2023/12/WhatsApp-Image-2023-12-08-at-11.12.47-AM-900x600.jpeg" alt="Scaler School of Technology"/>
                    <div>
                        <p>4-year undergraduate Program</p>
                        <p className=' text-3xl mt-3 mb-5'>August 2023 - Present</p>
                        <p className='flex flex-col justify-start font-medium text-xl'>
                            Relevant Coursework:
                            <ul className='list-disc m-2 font-mono'>
                                <li>DSA</li>
                                <li>FullStack Development</li>
                                <li>Database Management Systems</li>
                            </ul>
                        </p>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Education    