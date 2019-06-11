import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image' 

import Title from '../Title'
import style from '../../css/about.module.css'
import img from '../../images/defaultBcg.jpeg'

const getAbout = graphql`
query aboutImage {
  aboutImage:file(relativePath:{eq:"defaultBcg.jpeg"}){
    childImageSharp {
      fluid(maxWidth:600){
        ...GatsbyImageSharpFluid
      }
    }
  }
}
`

const About = () => {

  const {aboutImage} = useStaticQuery(getAbout)

  return (
    <div className={style.about}>
      <Title title="about" subtitle="us"/>
      <div className={style.aboutCenter}>
        <article className={style.aboutImg}>
          <div className={style.imgContainer}>
            {/* <img src={img} alt="About"/> */}
            <Img fluid={aboutImage.childImageSharp.fluid} alt="Landscape"/>
          </div>
        </article>
        <article className={style.aboutInfo}>
          <h4>explore the difference</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Fusce maximus, lectus ac mattis convallis, diam nunc interdum nulla, vitae aliquam leo diam ut lacus. 
            Mauris sed tempus nunc. Curabitur elementum porta odio, et sagittis orci fermentum ac.
          </p>
          <button type="button" className="btn-primary">read more</button>
        </article>
      </div>
    </div>
  )
}

export default About
