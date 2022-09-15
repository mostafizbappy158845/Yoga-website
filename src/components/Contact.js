import React, {useState, useEffect, useRef} from 'react';

const Contact = () => {
  return (
    <section className='section-sm lg:pt-[250px] '>
      <div className="container mx-auto">
        <div className='flex flex-col lg:flex-row lg:gap-x-[74px] bg-contact bg-no-repeat
        bg-cover min-h-[600px]'>
          {/* text */}
          <div className='flex-1 flex flex-col justiify-center pl-8'>
            <h2 className='h2 mb-3 lg:mb-7'>Get in Touch with Us for Yoga Course.</h2>
            <p className='mb-7 lg:mb-0'>Get in touch with us for any kind of help. We are here to help you the best and also here to help you to find your yoga course.</p>
          </div>
          {/* form */}
          <form className='flex-1 bg-pink-200 shadow-primary rounded-[20px] p-5 lg:p-10 flex flex-col gap-y-5 max-h-[600px] lg-mt-20'>
            <input type="text" />
            <input type="text" />
            <input type="text" />
            <input type="text" />
            <textarea></textarea>
            <button>Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;