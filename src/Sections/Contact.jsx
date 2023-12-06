import React, { useState, useRef } from "react";
import { block } from "million";
import emailjs from "@emailjs/browser";






const ContactBlock = block(function Contact() {
const [result, showResult] = useState(false);
const form = useRef();

const [nameValue, setNameValue] = useState("");
const [emailValue, setEmailValue] = useState("");
const [messageValue, setMessageValue] = useState("");


const sendEmail = (e) => {

  e.preventDefault();

  const templateParams = {
    user_name: nameValue,
    user_email: emailValue,
    message: messageValue
  };

  emailjs.send('service_w2x8kdj','template_mlkqy44', templateParams, 'F3vuGXhU25FR3XsgJ')
  .then((response) => {
     console.log('SUCCESS!', response.status, response.text);
  }, (err) => {
     console.log('FAILED...', err);
  });
  }


const handleNameChange = (e) => {
  setNameValue(e.target.value); // Update input value state when input changes
};

const handleEmailChange = (e) => {
  setEmailValue(e.target.value); // Update input value state when input changes
};

const handleMessageChange = (e) => {
  setMessageValue(e.target.value); // Update input value state when input changes
};




  return (

    
    <div id="contact" className="relative">
      <form ref={form} onSubmit={sendEmail}>
        <section className="text-slate-50 body-font relative bg-[#121212]">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-col text-center w-full mb-12">
              <h1 className="sm:text-5xl text-4xl font-medium title-font mb-4 text-slate-50">
                Work With Us
              </h1>
              <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                Tell us your idea in the contact form below and we can get in
                touch to make your website come to life.
              </p>
            </div>
            <div className="lg:w-1/2 md:w-2/3 mx-auto">
              <div className="flex flex-wrap -m-2">
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label
                      for="name"
                      className="leading-7 text-sm text-slate-100"
                    >
                      Name
                    </label>
                    <input
                      onChange={handleNameChange}
                      type="text"
                      id="name"
                      name="from_name"
                      className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label
                      
                      for="email"
                      className="leading-7 text-sm text-slate-100"
                    >
                      Email
                    </label>
                    <input
                    onChange={handleEmailChange}
                      type="email"
                      id="email"
                      name="reply_to"
                      className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <div className="p-2 w-full">
                  <div className="relative">
                    <label
                      
                      for="message"
                      className="leading-7 text-sm text-slate-100"
                    >
                      Your Idea
                    </label>
                    <textarea
                    onChange={handleMessageChange}
                      id="message"
                      name="message"
                      className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                    ></textarea>
                  </div>
                </div>
                <div className="p-2 w-full">
                  <button
                    type="submit"
                    class="flex mx-auto bg-stone-900 hover:bg-stone-700 text-white font-bold py-2 px-4 border-b-4 border-stone-800 hover:border-stone-600 rounded"
                  >
                    Submit
                  </button>
                </div>
                <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
                  <a className="text-indigo-500">
                    webscrapers.contact@gmail.com
                  </a>
                  <p className="leading-normal my-5">Based in Chicago, IL</p>
                </div>
              </div>
              {/* <a className="text-white pt-2 pb-1">
                webscrapers.contact@gmail.com
              </a>
              <a className="text-white pb-1">224-239-8445</a> */}
            </div>
          </div>
        </section>
      </form>
    </div>
  );
});



export default ContactBlock;

