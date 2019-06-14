import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import Title from '../Title'
import BlogCard from './BlogCard'

import style from '../../css/blog.module.css'

const getPosts = graphql`
query {
  posts:allContentfulPost(sort: {fields:published, order:DESC} ){
    edges{
      node{
        published(formatString:"DD MM YYYY")
        id:contentful_id
        title
        slug
        image{
          fluid{
            ...GatsbyContentfulFluid
          }
        }
      }
    }
  }
}
`

const BlogList = () => {
  const {posts} = useStaticQuery(getPosts)

  return (
    <section className={style.blog}>
      <Title title="our" subtitle="blog"/>
      <div className={style.center}>
        {posts.edges.map(({node}) => {
          return <BlogCard key={node.id} blog={node}/>
        })}
      </div>
    </section>
  )
}

export default BlogList
