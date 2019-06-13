import React from 'react'
import { useStaticQuery, graphql } from 'gatsby' 

import TourList from './TourList'


const getTours = graphql`
query {
  tours: allContentfulTour{
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
            ...GatsbyContentfulFluid_tracedSVG
          }
        }
      }
    }
  }
}

`
const Tours = () => {
  const {tours} = useStaticQuery(getTours)

  return (
      <TourList tours={tours}/>
  )
}

export default Tours
