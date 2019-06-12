import React from 'react'
import AniLink from "gatsby-plugin-transition-link/AniLink"
import style from '../css/footer.module.css'
import links from '../constants/links'
import social from '../constants/social-links'

const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style.links}>
        {links.map((item, index)=>{
          return <AniLink fade key={index} to={item.path}>{item.text}</AniLink>
        })}
      </div>
      <div className={style.icons}>
        {social.map((item, index)=>{
          return <a key={index} href={item.url} target="_blank" rel="noopener noreferrer">{item.icon}</a>
        })}
      </div>
      <div className={style.copyright}>copyright &copy; backroads travel compagny {new Date().getFullYear()} all right reserved</div>
    </footer>
  )
}

export default Footer
