import React from 'react'
import './contact.css'
import {AiOutlineMail} from 'react-icons/ai'
import {RiMessengerLine} from 'react-icons/ri'
import emailjs from 'emailjs-com'
import {useRef} from 'react'

const Contact = () => {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm('service_jw3lq3l', 'template_1jarxbg', form.current, 'x0xJ6N0QsT9Kf9fYN')

    e.target.reset()
  }

  return (
    <section id='contact'>
      <h5>Ta kontakt</h5>
      <h2>Kontakt meg</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <AiOutlineMail className='contact__option-icon'/>
            <h4>Epost</h4>
            <h5>haavard.s92@gmail.com</h5>
            <a href="mailto:haavard.s92@gmail.com" target="_blank" rel="noreferrer">Send en melding</a>
          </article>

          <article className='contact__option'>
            <RiMessengerLine className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>Håvard Svenkerud</h5>
            <a href="https://m.me/havard.svenkerud" target="_blank" rel="noreferrer">Send en melding</a>
          </article>

          <article className='contact__option'>
            <RiMessengerLine className='contact__option-icon'/>
            <h4>Telefon</h4>
            <h5>95846169</h5>
            <p>Gi meg en lyd</p>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Fullt navn' required />
          <input type="email" name='email' placeholder='Din e-post' required />
          <textarea name="message" rows="7" placeholder='Din melding' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Melding</button>
        </form>
      </div>
    </section>
  )
}

export default Contact