import React from 'react'
import Title from '../Title'
import style from '../../css/contact.module.css'

const Contact = () => {
  return (
    <section className={style.contact}>
      <Title title="contact" subtitle="us"/>
      <div className={style.center}>
        <form className={style.form} action="https://formspree.io/rico@club.fr" method="POST">
          <div>
            <label htmlFor="name">name</label>
            <input type="text" name="name" id="name" className={style.formControl} placeholder="Your Name"/>
          </div>
          <div>
          <label htmlFor="email">email</label>
            <input type="email" name="email" id="email" className={style.formControl} placeholder="email@email.com"/>
          </div>
          <div>
          <label htmlFor="message">message</label>
            <textarea name="message" id="message" rows="10" className={style.formControl} placeholder="Your Message"/>
          </div>
          <div>
            <input type="submit" value="Envoyer" className={style.submit}/>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Contact
