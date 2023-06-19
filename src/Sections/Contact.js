import React from "react";

function Contact() {
  return (
    <div>
      <footer className="footer p-10 bg-[#F4F1EC]">
        <div>
          <span className="font-semibold text-lg text-[#695B55]">Services</span>
          <a className="link link-hover text-black">Branding</a>
          <a className="link link-hover text-black">Design</a>
          <a className="link link-hover text-black">Framework</a>
        </div>
        <div>
          <span className="font-semibold text-lg text-[#695B55]">Company</span>
          {/* href=".Sections/AboutUs/#aboutus" */}
          <a className="link link-hover text-black">About us</a>
          {/* href=".Sections/Description/#description" */}
          <a className="link link-hover text-black">Description</a>
        </div>
        <div>
          <div className="grid grid-flow-row gap-4">
            <div>
              <div className="font-semibold text-lg text-[#695B55]">Email</div>
              <div className="font-thin text-base text-black">
                temporary@gmail.com
              </div>
            </div>
            <div>
              <div className="font-semibold text-lg text-[#695B55]">Number</div>
              <div className="font-thin text-base text-black">XXX-XXX-XXXX</div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Contact;
