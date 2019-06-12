import React from 'react'
import AniLink from "gatsby-plugin-transition-link/AniLink"

import Layout from '../components/Layout'
import Banner from '../components/Banner'
import style from '../css/error.module.css'

const notFound = () => {
  return (
    <Layout>
      <header className={style.error}>
        <Banner title="Oups ! Nothing found">
          <AniLink fade to="/" className="btn-white">Back to Home</AniLink>
        </Banner>
      </header>
    </Layout>
  )
}

export default notFound