import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import StyledHero from '../components/StyledHero'

import Tours from '../components/Tours/Tours'

export default class tours extends React.Component {
  render() {    
    return (
      <Layout>
        <StyledHero img={this.props.data.toursBcg.childImageSharp.fluid} />
        <Tours/>               
      </Layout>
    )
  }
}

export const query = graphql`
query {
  toursBcg:file(relativePath:{eq:"defaultBcg.jpeg"}){
    childImageSharp{
      fluid(quality:90, maxWidth:4160){
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
}
`
