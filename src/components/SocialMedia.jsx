import React from 'react'
import{BsTwitter, BsInstagram} from 'react-icons/bs'
import{BsFacebook} from 'react-icons/bs'


const SocialMedia = () => {
  return (
    <div className='app__social'>
        <div>
            <BsTwitter/>
        </div>
        <div>
            <BsInstagram/>
        </div>
        <div>
            <BsFacebook/>
        </div>
    </div>
  )
}

export default SocialMedia