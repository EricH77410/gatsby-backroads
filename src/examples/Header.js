import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

const getSiteData = graphql`
{
  site {
    siteMetadata {
      title
      author
    }
  }
}
`

const Header = () => {
  const { site } = useStaticQuery(getSiteData)
  return (
    <div>
      <h1>title: {site.siteMetadata.title}</h1>
      <h1>author: {site.siteMetadata.author}</h1>
    </div>
  )
}

export default Header
