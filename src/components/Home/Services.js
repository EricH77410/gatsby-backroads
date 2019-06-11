import React from 'react'

import Title from '../Title'
import style from '../../css/services.module.css'

import services from '../../constants/services'

const Services = () => {
  return (
    <section className={style.services}>
      <Title title="our" subtitle="services"/>
      <div className={style.center}>
        {
          services.map((item, index) => {
            return <article key={index} className={style.service}>
              <span>{item.icon}</span>
              <h4>{item.title}</h4>
              <p>{item.text}</p>
            </article>
          })
        }
      </div>
    </section>
  )
}

export default Services
