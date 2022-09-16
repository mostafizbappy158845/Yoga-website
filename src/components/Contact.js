import React, { useState, useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [emailMessage, setemailMessage] = useState('');
  const [emailTextColor, setEmailTextColor] = useState('');

  const form = useRef();

  useEffect(()=>{
    //timer
    const timer = setTimeout(() =>{
      setemailMessage('');
    },3000);
    //clear the timer
    return()=> clearTimeout(timer);
  },[emailMessage])

  const sendEmail = (e) => {
    e.preventDefault();



    emailjs.sendForm('service_qpv1c4s', 'template_subcka6', form.current, '_vpjQGW8zlup6IMJu')
      .then((result) => {
        setemailMessage('Your message was sent :)');
        setEmailTextColor('green');
      }, (error) => {
        setemailMessage('Your message was not sent :(');
        setEmailTextColor('red');
      });
    e.target.reset();
  };

  return (
    <section className='section-sm lg:pt-[250px] ' id='contact'>
      <div className="container mx-auto">
        <div className='flex flex-col lg:flex-row lg:gap-x-[74px] bg-contact bg-no-repeat
        bg-cover min-h-[600px]'
        data-aos='zoom'
        data-aos-offset='400'
        >
          {/* text */}
          <div className='flex-1 flex flex-col justiify-center pl-8'
          data-aos='fade-down'
          data-aos-delay='300'
          data-aos-offset='500'
          >
            <h2 className='h2 mb-3 lg:mb-7'>Get in Touch with Us for Yoga Course.</h2>
            <p className='mb-7 lg:mb-0'>Get in touch with us for any kind of help. We are here to help you the best and also here to help you to find your yoga course.</p>
          </div>
          {/* form */}
          <form
            onSubmit={(e) => sendEmail(e)}
            ref={form}
            className='flex-1 bg-white shadow-primary rounded-[20px] p-5 lg:p-10 flex flex-col gap-y-5 max-h-[600px] lg-mt-20'
            data-aos='fade-up'
            data-aos-delay='300'
            data-aos-offset='500'
            >
            <input className='form-control' placeholder='First name' name='user_firstname' type="text" required />
            <input className='form-control' placeholder='Last name' name='user_lastname' type="text" required />
            <input className='form-control' placeholder='Email address' name='user_email' type="email" required />
            <textarea className='form-control py-5 h-[165px] resize-none' placeholder='Message' name='user_message'></textarea>
            <button className='btn btn-lg btn-orange' type='submit'>Send Message</button>
            <p style={{color: emailTextColor}}>{emailMessage}</p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;