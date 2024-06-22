import React, { useState, useEffect, useRef } from 'react'
// import {AiFillEye, AiFillGithub} from 'react-icons/ai'
import {motion, useScroll} from 'framer-motion'

// import { AppWrap } from '../../wrapper'
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
  {title: "VP for Internal Support of BEST Izmir", description:"VPIS is basically in charge of development of our volunteers in every aspect and to control HR process", location:"", time:"2021-2022"},
  {title: "General Assembly Delegate of BEST Izmir", description:"General Assembly is the obligatory event for every department and Local Best Group to participate. I represented BEST Izmir and made a Mental-Wellbeing proposal to work on.", location:"Belgium", time:"2021"},
  {title: "Golden Cogwheel Project Member", description:"Golden Cogwheel is a project that aims improve the quality of EBEC service", location:"International Project", time:"2021-2022"},
  {title: "Topic Responsible of EBEC Turkey", description:"EBEC is European wide engineering competition. I prepared the topics that participants will compete and juries will evaluate", location:"Ankara/Turkey", time:"2022"},
  {title: "Local Round Support Team ", description:"LRST is a support team for Local Best Groups that want to organise local round of EBEC and needs help", location:"International Project", time:""},
  {title: "EBEC Programme Delegate for Spring Regional Meeting", description:"Regional Meetings are obligatory events for every region to gain knowledge about international side of BEST, to get to know other LBGs and their working methods.", location:"International Project", time:"2023"},
  {title: "Supervisory Board of LBG Izmir", description:"Supervisory board overviews boards' actions due to Statue of LBG Izmir, Statue of BEST and university Regulations.", location:"Izmir", time:"2022-Now"}
]

// motion.div
function Projects() {
  return (
    <>
      <h2 className='head-text'>
        Here are <span> what I worked on </span> <br /> during <span>My Education</span>
      </h2>
      

      <div className='projects'>

        <section className='department-projects'>
          {projects.map((project, index) =>(
          <motion.div 
            key={projects.title + index}
            whileInView={{opacity: [0, 1]}}
            transition={{duration: 3, type: "spring"}}
            className='project__department-item'
          >
            
            <img src={project.imgUrl} alt={project.title}/>
            <h2 className='bold-text' style={{marginTop: 20}}>{project.title}</h2>
            <p className='p-text' style={{marginTop: 10}}>{project.description}</p>
            <p className='location'>{project.location}</p>
          </motion.div>
        ))}
        </section>
        
        <section className='best-projects'>
          {bestExperiences.map((experience, index) => (
          <motion.div
            key={experience.title + index}
            whileInView={{opacity: [0, 1]}}
            transition={{duration: 3, type: "spring"}}
            className='project__best-item'
          >
            <h2 className='bold-text' style={{margin: 20}}>{experience.title}</h2>
            <p className='p-text' style={{margin: 10}}>{experience.description}</p>
            <p className='location'>{experience.location}</p>
            <p className='time'>{experience.time}</p>
            <hr className='line-betweenhr'></hr>

          </motion.div>

        ))}
        </section>

      </div>
    </>
  )
}

export default Projects