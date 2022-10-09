import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href="https://www.linkedin.com/in/h%C3%A5vard-svenkerud-a53142253/" target="_blank" rel="noreferrer"><BsLinkedin /></a>
        <a href="https://github.com/HaavardSvenk" target="_blank" rel="noreferrer"><BsGithub /></a>
    </div>
  )
}

export default HeaderSocials