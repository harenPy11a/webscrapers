import React from "react";
import { block } from "million";

const ContactBlock = block(function Contact() {
  return (
    <div id="contact" className="relative">
      <footer className="footer p-10 bg-[#000]">
        <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-40 lg:grid-cols-3 lg:grid-rows-1 lg:mx-auto">
          <div className="flex flex-col">
            <span className="font-semibold text-lg text-[#fff]">Services</span>
            <a className="text-white pb-1 pt-2">Branding</a>
            <a className="text-white pb-1">Design</a>
            <a className="text-white pb-1">Framework</a>
          </div>
          <div className="flex flex-col">
            <span className="font-semibold text-lg text-[#fff]">Company</span>
            <a href="#aboutus" className="link link-hover text-white pt-2 pb-1">
              About us
            </a>
            <a href="#description" className="link link-hover text-white pb-1">
              Description
            </a>
          </div>
          <div className="flex flex-col">
            <div className="font-semibold text-lg text-[#fff] ">Contact</div>
            <a className="text-white pt-2 pb-1">
              webscrapers.contact@gmail.com
            </a>
            <a className="text-white pb-1">224-239-8445</a>
          </div>
        </div>
      </footer>
    </div>
  );
});

export default ContactBlock;
