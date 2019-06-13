import React from 'react'

import AniLink from "gatsby-plugin-transition-link/AniLink"
import Image from 'gatsby-image'
import { FaMap } from 'react-icons/fa'

import PropTypes from 'prop-types';

import style from '../../css/tour.module.css'

// Au cas ou les images seraient vides.
import { useStaticQuery, graphql } from 'gatsby'

const getDefaultImg = graphql`
query {
  file(relativePath: {eq:"defaultBcg.jpeg"}){
    childImageSharp{
      fluid{
        ...GatsbyImageSharpFluid
      }
    }
  }
}
`

const Tour = ({tour}) => {

  // Image par defaut si inexistante
  const data = useStaticQuery(getDefaultImg)
  const img = data.file.childImageSharp.fluid

  const {name, price, country, slug, days, images} = tour

  const maiImg = images ? images[0].fluid : img

  return (
    <article className={style.tour}>
      
      <div className={style.imgContainer}>
        <Image fluid={maiImg} className={style.img} alt="single tour"/>
        <AniLink fade className={style.link} to={`/tours/${slug}`}>details</AniLink> 
      </div>

      <div className={style.footer}>
        <h3>{name}</h3>
        <div className={style.info}>
          <h4 className={style.country}>
            <FaMap className={style.icon} />
            { country || 'default country' }
          </h4>
          <div className={style.details}>
            <h5>{days} days</h5>
            <h6>from ${price}</h6>
          </div>
        </div>
      </div>

    </article>
  )
}

Tour.propTypes = {
  tour: PropTypes.shape({
    name: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    days: PropTypes.number.isRequired,
    images: PropTypes.arrayOf(PropTypes.object).isRequired
  })
}

export default Tour
