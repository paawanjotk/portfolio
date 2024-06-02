import React from 'react';
import MTBS from './movie.jpeg'
import quiz from './Screenshot from 2024-06-02 11-34-16.png'
const Projects = () => {
  return (
    <div className='h-screen bg-[#010e1b] text-white flex flex-col items-center pt-8'>
        <div className=' flex flex-col align-middle justify-center gap-10  w-2/5'>
            <h4 className=' text-2xl'>Projects----------</h4>
            <div className=' gallery-cards grid grid-cols-2 gap-10'>
                <div>
                  <p className=' text-2xl font-mono font-bold'>Movie Ticket Booking System- BackEnd</p>
                  <p className=' mt-3  text-lg font-thin'>-Java, SpringBoot, MySQL</p>
                </div>
                <a className=' gallery-card flex flex-col gap-4 justify-start' href="https://github.com/paawanjotk/MovieTicketBookingSystem">
                    <img  src={MTBS}/>
                </a>
                <div>
                  <p className=' text-2xl font-mono font-bold'>A Quiz Web App</p>
                  <p className=' mt-3  text-lg font-thin'>-HTML, CSS, Javascript</p>
                </div>
                <a className=' gallery-card flex flex-col gap-4 justify-start' href="https://github.com/paawanjotk/Quiz-App-Assignment">
                    <img  src={quiz}/>
                </a>
            </div>
        </div>
    </div>
  )
}

export default Projects