/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

 require("dotenv").config({
   path: `.env.${process.env.NODE_ENV}`,
 })

module.exports = {
  siteMetadata: {
    title:"Backroads",
    description:"Explore awesome worldwilde tours & discover what makes each othem unique. forget your daily routine & say yes to adventure",
    author:"@rico"
  },
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-plugin-styled-components',
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    'gatsby-plugin-transition-link',
    {
      resolve:'gatsby-source-filesystem',
      options: {
        name:'images',
        path:`${__dirname}/src/images/`
      }
    },
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId:process.env.CONTENTFUL_SPACE_ID,
        accessToken:process.env.CONTENTFUL_TOKEN,
      }
    }
  ]
}
