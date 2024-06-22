import React from 'react'
import "./About.scss"
import {motion} from 'framer-motion'

import {AppWrap} from '../../wrapper'
import {images} from '../../constants'

const abouts = [
  {title: "Developer", description: "Software Developer", imgUrl: images.about01},
  {title: "BESTie", description: "5 year old avtive BEST volunteer ", imgUrl: images.about02},
  {title: "Agile methods", description: "Thanks to BEST, I'm familiar with Agile working methods", imgUrl: images.about03}
]

function About() {
  return (
    <>
      <h2 className='head-text'>
        I know that <span> dedicated passion </span> <br /> means <span>Good business</span>
      </h2>

      <div className='app__profiles'>
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{opacity: 1}}
            whileHover={{scale: 1.1}}
            transition={{duration: 0.5, type: 'tween'}}
            className='app__profile-item'
            key={about.title + index}
            >
            
            <img src={about.imgUrl} alt={about.title}/>
            <h2 className='bold-text' style={{marginTop: 20}}>{about.title}</h2>
            <p className='p-text' style={{marginTop: 10}}>{about.description}</p>

          </motion.div>
        ))}
      </div>
    </>
  )
}

export default AppWrap(About, 'about');