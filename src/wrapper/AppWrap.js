import React from 'react'
import {Navigationdots, SocialMedia} from '../components'

const AppWrap = (Component, idName, ClassNames) => function HOC() {
  return (
    <div id={idName} className={`app__container ${ClassNames}`}>
      <SocialMedia/>
      <div className='app__wrapper app__flex'>
        <Component/>

      </div>
      <Navigationdots active={idName} />
    </div>
  )
}

export default AppWrap