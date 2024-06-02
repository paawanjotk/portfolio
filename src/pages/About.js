import React from 'react'
import Tile from '../components/Tile'
import { CiGlobe } from "react-icons/ci";
import { FaDatabase } from "react-icons/fa";
import { IoNewspaper } from "react-icons/io5";
import { ImHammer2 } from "react-icons/im";
import photo from './IMG20231020145350.jpg';
const About = () => {
  

  return (
    <div className=' bg-[#010e1b] text-white h-screen flex flex-col items-center gap-8 pt-8'>
        <div className='description-container flex flex-col gap-12 align-middle justify-center w-3/6'>
            <div className='about-container flex  gap-5 flex-col'>
                <h4 className=' text-2xl'>About---------</h4>
                <div className='description flex gap-10'>
                    <img className=' w-2/6 h-auto' src={photo} alt='picture'></img>
                    <p className=' font-light text-xl antialiased text-lime-50'> 
                        Focused and enthusiastic undergrad student with a keen interest in software development and artificial intelligence. 
                        By comprehensive exposure to the underlying concepts and applications for solving problems, 
                        my love for these domains came into being. 
                        I am a passionate individual who thrives to build and apply algorithms to solve real-world industry problems.
                        <ul className=' list-disc m-2'>
                            <li>Email: paawanjotkaur05@gmail.com</li>
                        </ul>
                    </p>
                </div>
            </div>
            <div className='flex flex-col gap-5'>
                <h4 className='text-2xl'>Interests--------</h4>
                <div className='interests-container grid grid-cols-2 gap-8'>
                    <Tile skill='Software Development' icon={<CiGlobe size={56} color='pink'/>}/>
                    <Tile skill='Machine Learning' icon={<FaDatabase size={36} color='pink' />}/>
                    <Tile skill='Algorithms' icon={<IoNewspaper size={46} color='pink'/>}/>
                    <Tile skill='Ethics in Technology' icon={<ImHammer2 size={46} color='pink'/>}/>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default About