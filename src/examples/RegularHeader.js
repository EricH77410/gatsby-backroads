import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

const getSiteData = graphql`
query {
  site {
    siteMetadata {
      title
      author
    }
  }
}
`

const RegularHeader = () => {
  return (
    <StaticQuery query={getSiteData} render={(data)=>{
      console.log(data);
      return (
        <div>
        <h2>{data.site.siteMetadata.title}</h2>
        <h3>{data.site.siteMetadata.author}</h3>
        </div>
      )
    }} />
  )
}

export default RegularHeader
