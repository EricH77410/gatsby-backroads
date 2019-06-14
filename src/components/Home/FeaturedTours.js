import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import AniLink from "gatsby-plugin-transition-link/AniLink"

import Title from '../Title'
import Tour from '../Tours/Tour'

import style from '../../css/items.module.css'

const getFeaturedTours = graphql`
query {
  featured: allContentfulTour(filter: { featured: { eq: true } }) {
    edges {
      node {
        name
        price
        slug
        days
        country
        contentful_id
        images {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
      }
    }
  }
}
`

const FeaturedTours = () => {

  const data = useStaticQuery(getFeaturedTours)
  const tours = data.featured.edges

  return (
    <section className={style.tours}>
      <Title title="featured" subtitle="tours" />
      
      <div className={style.center}>
      
        { tours.map(({ node }) => {
          return <Tour key={node.contentful_id} tour={node} />
        })}

      </div>
      
      <AniLink fade to="/tours" className="btn-primary">
        All tours
      </AniLink>      
    </section>
  )
}

export default FeaturedTours
