import React, { useState } from 'react'

import AniLink from "gatsby-plugin-transition-link/AniLink"
import style from '../css/navbar.module.css'
import { FaAlignRight } from 'react-icons/fa'
import links from '../constants/links'
import social from '../constants/social-links'
import logo from '../images/logo.svg'

const Navbar = () => {
  const [isOpen, setNav] = useState(false)
  const toggleNav = () => {
    setNav(isOpen => !isOpen)
  }
  console.log(isOpen)
  return (
    <nav className={style.navbar}>
      <div className={style.navCenter}>
        <div className={style.navHeader}>
          <img src={logo} alt="Backroads Logo"/>
          <button type="button" className={style.logoBtn} onClick={toggleNav}>
            <FaAlignRight className={style.logoIcon}/>
          </button>
        </div>
        <ul className={isOpen ? `${style.navLinks} ${style.showNav}` : `${style.navLinks}` }>
          {links.map((item, index) => {
            return (
              <li key={index}>
                <AniLink fade to={item.path}>{item.text}</AniLink>
              </li>
            )
          })}
        </ul>
        <div className={style.navSocialLinks}>
          { social.map((item, index) => {
            return <a key={index} href={item.url} target="_blank" rel="noopener noreferrer">{item.icon}</a>
          })}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
