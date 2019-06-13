import React from "react"
import { graphql } from 'gatsby'
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Layout from '../components/Layout'

// import SimpleHero from '../components/SimpleHero'
import StyledHero from '../components/StyledHero'
import Banner from '../components/Banner'
import About from '../components/Home/About'
import Services from '../components/Home/Services'
import FeaturedTours from '../components/Home/FeaturedTours'

export default ({data}) => (
    <Layout>
      <StyledHero home="true" img={data.defaultBcg.childImageSharp.fluid}>
        <Banner title="continue exploring" info="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab exercitationem, consequatur quibusdam minima alias eius et reprehenderit impedit facere mollitia sed sequi ducimus maiores earum ut est, velit voluptatem repellendus.">
          <AniLink fade to="/tours" className="btn-white">Explore tours</AniLink>
        </Banner>
      </StyledHero>
      <About />
      <Services />
      <FeaturedTours />
    </Layout>
)

export const query = graphql`
query {
  defaultBcg:file(relativePath:{eq:"defaultBcg.jpeg"}){
    childImageSharp{
      fluid(quality:90, maxWidth:4160){
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
}
`