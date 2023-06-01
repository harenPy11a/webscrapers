import React from "react";

function Contact() {
  return (
    <div>
      <footer className="footer p-10 bg-neutral text-neutral-content">
        <div>
          <span className="footer-title">Services</span>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Framework</a>
        </div>
        <div>
          <span className="footer-title">Company</span>
          {/* href=".Sections/AboutUs/#aboutus" */}
          <a className="link link-hover">About us</a>
          {/* href=".Sections/Description/#description" */}
          <a className="link link-hover">Description</a>
        </div>
        <div>
          <div className="grid grid-flow-row gap-4">
            <div>
              <div className="font-semibold text-lg">Email</div>
              <div className="font-thin text-base">temporary@gmail.com</div>
            </div>
            <div>
              <div className="font-semibold text-lg">Number</div>
              <div className="font-thin text-base">XXX-XXX-XXXX</div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Contact;
