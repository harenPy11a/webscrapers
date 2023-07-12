import React from "react";
import { block } from "million";
const ContactBlock = block(function Contact() {
  return (
    <div className="relative">
      <footer className="footer p-10 bg-[#000] ">
        {/* flex justify-center */}

        <div>
          <span className="font-semibold text-lg text-[#fff]">Services</span>
          <a className="text-white">Branding</a>
          <a className="text-white">Design</a>
          <a className="text-white">Framework</a>
        </div>
        <div>
          <span className="font-semibold text-lg text-[#fff]">Company</span>
          {/* href=".Sections/AboutUs/#aboutus" */}
          <a className="link link-hover text-white">About us</a>
          {/* href=".Sections/Description/#description" */}
          <a className="link link-hover text-white">Description</a>
        </div>
        <div>
          <div className="grid grid-flow-row gap-4">
            <div>
              <div className="font-semibold text-lg text-[#fff]">Email</div>
              <div className="font-thin text-base text-white">
                temporary@gmail.com
              </div>
            </div>
            <div>
              <div className="font-semibold text-lg text-[#fff]">Number</div>
              <div className="font-thin text-base text-white">XXX-XXX-XXXX</div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
});

export default ContactBlock;
