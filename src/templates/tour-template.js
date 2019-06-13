import React from 'react'
import { graphql } from 'gatsby'
import Image from 'gatsby-image'

import { FaMoneyBillWave, FaMap } from 'react-icons/fa'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

import Layout from '../components/Layout'
import StyledHero from '../components/StyledHero'
import Day from '../components/SingleTour/Day'

import style from '../css/template.module.css'

const Template = ({data}) => {

  const {
    name, 
    country, 
    days, 
    price, 
    description:{description}, 
    images,
    start, 
    journey
  } = data.tour

  // Destructure du tableau des images
  // on réupere la 1er image du tableau et on l'affecte à la variable 'mainImg'
  // Le reste des images est affecté à la variable tourImages
  const [mainImg,...tourImages] = images

  return (
    <Layout>
      <StyledHero img={mainImg.fluid} />
      <section className={style.template}>
        <div className={style.center}>
          <div className={style.images}>
            {tourImages.map((item, index) => {
              return <Image key={index} fluid={item.fluid} alt="single tour"/>
            })}
          </div>
          <h2>{name}</h2>
          <div className={style.info}>
            <p>
              <FaMoneyBillWave className={style.icon} />
              starting from ${price}
            </p>
            <p>
              <FaMap className={style.icon} />
              {country}
            </p>
          </div>
          <h4>starts on : {start}</h4>
          <h4>duration: {days}</h4>
          <p className={style.desc}>{description}</p>
          <h2>daily schedule</h2>
          <div className={style.journey}>
            {journey.map((item, index) => {
              return <Day key={index} day={item.day} info={item.info} />
            })}
          </div>
          <AniLink fade to="/tours" className="btn-primary">
            back to tours
          </AniLink>
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query($slug:String!) {
    tour:contentfulTour(slug: { eq: $slug }){
      name
      price
      country
      days
      start(formatString:"dddd MMMM Do, YYYY")
      description{
        description
      }
      journey{
        day
        info
      }
      images{
        fluid {
          ...GatsbyContentfulFluid_tracedSVG
        }
      }
    }
  }
`
export default Template
