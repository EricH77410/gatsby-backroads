import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import StyledHero from '../components/StyledHero'


 const blog = ({data}) => {
  return (
    <Layout>
      <StyledHero home={false} img={data.blogBcg.childImageSharp.fluid}>
        <h1>Hello from the blog page</h1>
      </StyledHero>       
    </Layout>
  )
}

export default blog

export const query = graphql`
query {
  blogBcg:file(relativePath:{eq:"blogBcg.jpeg"}){
    childImageSharp{
      fluid(quality:90, maxWidth:4160){
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
}
`
