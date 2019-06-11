import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/Layout'
import Banner from '../components/Banner'
import style from '../css/error.module.css'

const notFound = () => {
  return (
    <Layout>
      <header className={style.error}>
        <Banner title="Oups ! Nothing found">
          <Link to="/" className="btn-white">Back to Home</Link>
        </Banner>
      </header>
    </Layout>
  )
}

export default notFound