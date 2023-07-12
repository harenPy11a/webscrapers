import React from "react";
import { block } from "million";
const ContactBlock = block(function Contact() {
  return (
    <div id="contact" className="relative">
      <footer className="footer p-10 bg-[#000] ">
        {/* flex justify-center */}

        <div className="lg:pl-52">
          <span className="font-semibold text-lg text-[#fff]">Services</span>
          <a className="text-white">Branding</a>
          <a className="text-white">Design</a>
          <a className="text-white">Framework</a>
        </div>
        <div>
          <span className="font-semibold text-lg text-[#fff]">Company</span>
          {/* href=".Sections/AboutUs/#aboutus" */}
          <a href="#aboutus" className="link link-hover text-white">About us</a>
          {/* href=".Sections/Description/#description" */}
          <a href="#description" className="link link-hover text-white">Description</a>
        </div>
        <div>
          <div className="grid grid-flow-row gap-4">
            <div>
              <div className="font-semibold text-lg text-[#fff]">Email</div>
              <div className="font-thin text-base text-white">
              webscrapers.contact@gmail.com
              </div>
            </div>
            <div>
              <div className="font-semibold text-lg text-[#fff]">Number</div>
              <div className="font-thin text-base text-white">224-239-8445</div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
});

export default ContactBlock;
