import React from "react"
import { Link } from 'gatsby'

import Layout from '../components/Layout'

import SimpleHero from '../components/SimpleHero'
import Banner from '../components/Banner'
import About from '../components/Home/About'
import Services from '../components/Home/Services'

export default () => (
  <>
    <Layout>
      <SimpleHero>
        <Banner title="continue exploring" info="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab exercitationem, consequatur quibusdam minima alias eius et reprehenderit impedit facere mollitia sed sequi ducimus maiores earum ut est, velit voluptatem repellendus.">
          <Link to="/tours" className="btn-white">Explore tours</Link>
        </Banner>
      </SimpleHero>
      <About />
      <Services />
    </Layout>    
  </>
)