import React from 'react'

import Image from 'gatsby-image'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

import style from '../../css/blog-card.module.css'

const BlogCard = ({blog}) => {
  const {slug, title, image, published } = blog
  return (
    <article className={style.blog}>

      <div className={style.imgContainer}>

        <Image fluid={image.fluid} className={style.img} alt="Single Post"/>
        <AniLink fade className={style.link} to={`/blog/${slug}`}>
          read more
        </AniLink>
        <h6 className={style.date}>{published}</h6>

      </div>
      
      <div className={style.footer}>
        <h4>{title}</h4>
      </div>
    </article>
  )
}

export default BlogCard
