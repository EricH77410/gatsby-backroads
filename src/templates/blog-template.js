import React from 'react'
import { graphql } from 'gatsby'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

import Layout from '../components/Layout'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

import style from '../css/single-blog.module.css'

const Blog = ({data}) => {

  const {
    title,
    published,
    text:{ json }
  } = data.post

  // Pour l'affichage des images
  const options = {
    renderNode:{
      "embedded-asset-block":(node)=>{
        return (
            <img width="400" src={node.data.target.fields.file['en-US'].url} />          
        )
      }
    }
  }

  return (
    <Layout>
      <section className={style.blog}>
        <div className={style.center}>
          <h1>{title}</h1>
          <h4>published at : {published}</h4>
          <article className={style.post}>
            {documentToReactComponents(json, options)}
          </article>
          <AniLink fade to='/blog/' className="btn-primary">
            all posts
          </AniLink>
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
query getPost($slug:String!){
  post:contentfulPost(slug: {eq:$slug}){
    title
    published(formatString:"DD MM YYYY")
    text{
      json
    }
  }
}
`

export default Blog
