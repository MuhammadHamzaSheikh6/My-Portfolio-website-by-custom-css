import "./footer.css";
import Image from "next/image";

function Footer(){
    return(
        <footer className="custom-gradienttt">
        <div className="custom-containerrr">
          {/* Copyright Section */}
          <div className="custom-texttt">
            <p className="text-baseee">
              &copy; {new Date().getFullYear()} Muhammad Hamza. All rights reserved.
            </p>
          </div>
  
          {/* Social Media Links */}
          <div className="custom-flexxx">
            <a href="#" className="custom-transformmm">
              <Image className="" src="/.icon/github.png" alt="GitHub" width={30} height={30} />
            </a>
            <a href="#" className="custom-transformmm">
              <Image className="h-8" src="/.icon/linkedin.png" alt="LinkedIn" width={30} height={30} />
            </a>
            <a href="#" className="custom-transformmm">
              <Image className="h-8" src="/.icon/instagram.png" alt="Instagram" width={30} height={30} />
            </a>
            <a href="#" className="custom-transformmm">
              <Image className="h-8" src="/.icon/facebook.png" alt="Facebook" width={30} height={30} />
            </a>
          </div>
        </div>
      </footer>
    )
}
export default Footer;