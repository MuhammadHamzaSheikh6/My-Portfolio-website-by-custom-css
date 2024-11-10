import "./contact-us.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';

import React from 'react';
import Image from 'next/image';

export default function Contact() {
  return (
    <div id='contactus' className="container-center-screen2">
      <div className="card-container2">
        {/* Right: Contact Info (Text Section) */}
        <div className="section2"> {/* Adjust padding for mobile */}
          <h2 className="title2">Contact us</h2>
          <p className="description2">
            Thank you for visiting my portfolio! If you have any questions, inquiries, or collaboration opportunities, please feel free to reach out. I would love to hear from you! You can contact me through the form below or via my social media links. I strive to respond to all messages as quickly as possible.
          </p>
          <div className="space-y-42">
            <div className="violet2">
              <span className="material-icons mr-3"><FontAwesomeIcon icon={faPhone} /></span>
              <span>+92 341 2358480</span>
            </div>
            <div className="violet2">
              <span className="material-icons mr-3"><FontAwesomeIcon icon={faEnvelope} /></span>
              <span>m.hamzashaikh6067@gmail.com</span>
            </div>
            <div className="violet2">
              <span className="material-icons mr-3"><FontAwesomeIcon icon={faLocationDot} /></span>
              <span>Karachi, Pakistan.</span>
            </div>
            <div className="space2">
              <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/muhammad_hamza_sh8ikh?igsh=ZnYxd2ZxeW1hcjBh">
                <span><Image className="hover2" src="/.icon/instagram.png" alt="Instagram" width={35} height={35}/></span>
              </a>
              <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/profile.php?id=100073351960056&mibextid=ZbWKwL">
                <span><Image className="hover2" src="/.icon/facebook.png" alt="Facebook" width={35} height={35} /></span>
              </a>
              <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/muhammadhamzasheikh?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
                <span><Image className="hover2" src="/.icon/linkedin.png" alt="LinkedIn" width={35} height={35} /></span>
              </a>
            </div>
          </div>
        </div>

        {/* Left: Form Section */}
        <div className="custom-width-padding2"> {/* No margin adjustment needed */}
          <form className="custom-space-y-24">
            <div className="custom-flex2">
              <div className="custom-width2">
                <label htmlFor="first-name" className="custom-text2">
                  FIRST NAME
                </label>
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  className="custom-input2"
                />
              </div>
              <div className="w-full lg:w-1/2">
                <label htmlFor="last-name" className="custom-text2">
                  LAST NAME
                </label>
                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  className="custom-input2"
                />
              </div>
            </div>
            <div className="flex flex-col space-y-4 lg:space-y-0 lg:flex-row lg:space-x-4">
              <div className="w-full lg:w-1/2">
                <label htmlFor="email" className="custom-text2">
                  EMAIL
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="custom-input2"
                />
              </div>
              <div className="w-full lg:w-1/2">
                <label htmlFor="phone" className="custom-text2">
                  PHONE NUMBER
                </label>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  className="custom-input2"
                />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="custom-text2">
                WHAT DO YOU HAVE IN MIND?
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="custom-input22"
              ></textarea>
            </div>
            <div className="display2">
              <button
                type="submit"
                className="custom-button222"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
