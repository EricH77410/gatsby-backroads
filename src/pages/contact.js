import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import StyledHero from '../components/StyledHero'

const contact = ({data}) => {
  return (
    <Layout>
      <StyledHero home={false} img={data.contactBcg.childImageSharp.fluid}>
        The contact page
      </StyledHero>
      
    </Layout>
  )
}

export default contact

export const query = graphql`
query {
  contactBcg:file(relativePath:{eq:"connectBcg.jpeg"}){
    childImageSharp{
      fluid(quality:90, maxWidth:4160){
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
}
`