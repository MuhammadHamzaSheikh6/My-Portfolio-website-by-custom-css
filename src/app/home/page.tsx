"use client";
import "./home.css";
import { useEffect, useState } from 'react';
import About from '../about/page';
import Skills from '../skills/page';
import Project from '../project/page';
import Contact from '../contact-us/page';
import Image from 'next/image';





function Homepage() {
  const [, setIsVisible] = useState(false);

  useEffect(() => {
    // Set a timeout to update the visibility after the component mounts
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500); // Adjust the delay as needed
    return () => clearTimeout(timer); // Cleanup the timeout
  }, []);

  return (
    <main>
      <div className='CT '>
      {/* Text Section */}
      <div className="CB ccc">
      <ul className="CA">
        <li>
          <h4 className="CC">Hi There,</h4>
        </li>
        <li className="CD">
          I&apos;m Muhammad Hamza
          <span className="CE"></span>
        </li>
        <li>
          <h5 className="CF">Front-End Developer.</h5>
        </li>
        <li className="CG">
          <a href="/cv.pdf" download>
            <button className="CH">
              <span className="CI"></span>
              Download CV
            </button>
          </a>
        </li>
      </ul>

        <div className="CJ">
        {/* GitHub */}
          <a href="https://github.com/MuhammadHamzaSheikh6"
          target="_blank"
           className=" CK">
            <div className="group">
              <div className="CL">
                <Image className="CM" src="/.icon/github.png" alt="GitHub"width={35} height={35}/>
              </div> 
            <span className="CN">
              GitHub
            </span>
            </div>
          </a>

          {/* LinkedIn */}
          <a href="https://www.linkedin.com/in/muhammadhamzasheikh?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          target="_blank"
           className="CK">
            <div className="groupp">
            <div className="CLL">
              <Image className="CM" src="/.icon/linkedin.png" alt="LinkedIn" width={35} height={35} />
            </div>
            <span className="CNN">
              LinkedIn
            </span>
            </div>
          </a>

          {/* Instagram */}
          <a href="https://www.instagram.com/muhammad_hamza_sh8ikh?igsh=ZnYxd2ZxeW1hcjBh"
           target="_blank"
          className="CK">
            <div className="groupc">
            <div className="CCC">
              <Image className="CM" src="/.icon/instagram.png" alt="Instagram" width={35} height={35} />
            </div>
            <span className="CCH">
              Instagram
            </span>
            </div>
          </a>

          {/* Facebook */}
          <a href="https://www.facebook.com/profile.php?id=100073351960056&mibextid=ZbWKwL"
           target="_blank"
           className="CK">
            <div className="groupp">
            <div className="CLL">
              <Image className="CM" src="/.icon/facebook.png" alt="Facebook" width={35} height={35}/>
            </div>
            <span className="CNN">
              Facebook
            </span>
            </div>
          </a>
        </div>
      </div>  

      {/* Image Section */}
      <div className="custom-container ">
        <div className="custom-spin ">
          <Image
            className=" custom-style"
            src="/hamza2.jpg"
            alt="Hamza"
            width={300} height={300}
          />
          <div className="custom-background"></div>
        </div>
      </div>
    </div>
    <About/>
    <Skills/>
    <Project/>
    <Contact/>

    </main>   
    
      );
}

export default Homepage;
