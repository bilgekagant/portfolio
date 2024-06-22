import React, { useState, useEffect, useRef } from 'react'
import {AiFillEye, AiFillGithub} from 'react-icons/ai'
import {motion, useScroll} from 'framer-motion'

import { AppWrap } from '../../wrapper'
// import{urlFor, client} from '../../client'
import "./Projects.scss"
import {images} from '../../constants'


const projects = [
  {title: "My Portfolio Website", description: "My portfolio Website", imgUrl: images.about01},
  {title: "Discrete & Continous Time Markow Chains", description: "A project to demonstrate markow chains in a given dataset", imgUrl: images.about01},
  {title: "Single Page Web Application", description:"First SPA project by using React and Bootstrap", imgUrl: images.about01},
  {title:"Stochastic Hill Climbing Searching Methods", description:"A study to find and simulate shortest path on the given Graph. Nodes represents roads in a natural disaster. The main aspect is finding the best route depending pre-defined durableness posibility", imgUrl: images.about01},
  {title:"Data Scrapper by using Python", description:"Incomplete Data scrapping project for a small business", imgUrl:images.about01}
]

const  bestExperiences = [
  {title: "VP for Internal Support", description:"", time:""},
  {title:"General Assembly Delegate of BEST Izmir", description:"Belgium", time:""},
  {title: "Topic Responsible of EBEC Turkey", description:"EBEC is European wide competition ", time:""},
  {title: "Local Round Support Team ", description:"", time:""},
  {title: "EBEC SIM extra-Participant", description:"", time:""},
  {title: "EBEC Programme Delegate for Spring Regional Meeting", description:"Regional Meetings are obligatory events for every region to gain knowledge about international side of BEST, to get to know other LBGs and their working methods.", time:"2023"},
  {title: "Supervisory Board of LBG Izmir", description:"Supervisory board overviews boards' actions due to Statue of LBG Izmir, Statue of BEST and university Regulations.", time:"2022-Now"}
]

// motion.div
function Projects() {
  return (
    <>
      <h2 className='head-text'>
        Here are <span> what I worked on </span> <br /> during <span>My Education</span>
      </h2>
      

      <div className='projects'>
        {/* <svg viewBox="0 0 800 800" preserveAspectRatio = "none">
          <path d='
            M 0.334 2.407 L 25.504 10.831 C 50.675 19.254 101.016 36.101 121.574 62.976 C 142.131 89.851 132.906 126.755 111.045 160.449 C 89.183 194.143 54.687 224.629 48.269 247.693 C 41.851 270.758 63.511 286.402 92.091 296.23 C 120.671 306.057 156.171 310.068 175.224 329.121 C 194.277 348.175 196.885 382.27 172.216 411.653 C 147.547 441.035 95.601 465.704 65.818 498.128 C 36.035 530.552 28.413 570.731 24.602 590.821 L 20.792 610.911
          '/>
          
        </svg> */}
        <section className='department-projects'>
          {projects.map((project, index) =>(
          <motion.div 
            key={projects.title + index}
            whileInView={{opacity: [0, 1, 3]}}
            transition={{duration: 5, type: "spring"}}
            className='project__department-item'
          >
            
            <img src={project.imgUrl} alt={project.title}/>
            <h2 className='bold-text' style={{marginTop: 20}}>{project.title}</h2>
            <p className='p-text' style={{marginTop: 10}}>{project.description}</p>
          </motion.div>
        ))}
        </section>
        
        <section className='best-projects'>
          {bestExperiences.map((experience, index) => (
          <motion.div
            key={experience.title + index}
            transition={{duration: 5, type: "spring"}}
            className='project__best-item'
          >
            <h2 className='bold-text' style={{margin: 20}}>{experience.title}</h2>
            <p className='p-text' style={{margin: 10}}>{experience.description}</p>
            <p className='time'>{experience.time}</p>

          </motion.div>

        ))}
        </section>
        
      </div>
    </>
  )
}

export default Projects