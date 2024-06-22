import React from 'react'
import { About, BEST, Projects, Header, Skills } from './container'
import {Navbar} from './components'
import "./App.scss"

const App = () => {
  return (
    <div className='app'>
        <Navbar/>
        <Header/>
        <About/>
        <Projects/>
        <BEST/>
        <Skills/>

    </div>
  )
}

export default App