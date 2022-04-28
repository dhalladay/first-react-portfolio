import React, { useState, useRef } from "react";
import { validateEmail } from '../../utils/helpers';
import emailjs from '@emailjs/browser'

function ContactForm() {

  const form = useRef();

  const [errorMessage, setErrorMessage] = useState('');
  
  const [formState, setFormState] = useState({ name: '', email: '', message: ''});

  const { name, email, message } = formState;

  function handleChange(e) {
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      console.log(isValid);
      // isValid conditional statment
      if (!isValid) {
        setErrorMessage('Your email is invalid');
      } else {
        setErrorMessage('');
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required`);
      } else {
        setErrorMessage('');
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value })
    }
  }

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_8lg2lg6', 'contact_form', form.current, 'KDEQacv3isXKEjEyA')
      .then((result) => {
        console.log(result.text);
        
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <section className="container-fluid">
      <div className="row">
        <div className="col-lg-6 mx-auto">
      <h1 className="light">contact me:</h1>
      <form id="contact-form" ref={form} onSubmit={sendEmail}>
        <div className="my-2">
          <label htmlFor="name">name: </label>
          <input type="text" name="send_name" defaultValue={name} onBlur={handleChange} />
        </div>
        <div className="my-2">
          <label htmlFor="email">email address: </label>
          <input type="email" name="from_email" defaultValue={email} onBlur={handleChange} />
        </div>
        <div className="my-2">
          <label htmlFor="message">message: </label>
          <textarea name="message" rows="5" defaultValue={message} onBlur={handleChange} />
        </div>
        {errorMessage && (
          <div>
            <p className="error-text">
              {errorMessage}
            </p>
          </div>
        )}
        <button type="submit">Submit</button>
      </form>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;