import React from "react";

const Footer = () => {
  return (
    <footer className="footer p-10 px-20 bg-primary text-white">
      <div className="flex">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          className="fill-current"
        >
          <path d="M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z" />
        </svg>
        <p>
          Shop# 125 Metro Shopping mail House# 05 Road# 03
          <br />
          (new), Dhanmondi Dhaka-1209 Bangladesh
        </p>
      </div>
      <div>
        <span className="footer-title">Company</span>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Project</a>
        <a className="link link-hover">Our Team</a>
        <a className="link link-hover">Terms & Conditions</a>
      </div>
      <div>
        <span className="footer-title">Services</span>
        <a className="link link-hover">Branding</a>
        <a className="link link-hover">Design</a>
        <a className="link link-hover">Marketing</a>
        <a className="link link-hover">Advertisement</a>
      </div>

      <div>
        <span className="footer-title">About Us</span>
        <div>
          <p>
            The Best Parlour in Dhanmondi. One of the most Trustworthy and
            leading parlor care center in Dhanmondi.
          </p>
          <div className="footer-icon">
            <a
              href="https://www.facebook.com/akthermoyuri"
              target="_blank"
              rel="noreferrer"
              className="mr-5"
            >
              <i className="fa fa-facebook-square"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/moyuri-akther"
              target="_blank"
              rel="noreferrer"
              className="mr-5"
            >
              <i className="fa fa-linkedin"></i>
            </a>
            <a
              href="https://github.com/moyuriakther"
              target="_blank"
              rel="noreferrer"
              className="mr-5"
            >
              <i className="fa fa-github"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
