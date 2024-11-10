"use client";  // Add this line at the top

import "./header.css";


import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import Link from "next/link";

function Header() {
  return (
    <div className="main">
      {/* Wrapper to center header horizontally */}
      <header className="animate head md lg">
        <nav className="flex-justify-between">
          {/* Logo */}
          <a href="/">         
            <h2 className="custom-text">
              <span className="text-yellow">M</span>H.
            </h2>
          </a>

          {/* Desktop Navbar */}
          <ul className="custom-class">
            <li className="custom-link">
              <Link href="/home">HOME</Link>
            </li>
            <li className="custom-link">
              <Link href="#about">ABOUT ME</Link>
            </li>
            <li className="custom-link">
              <Link href="#skill">SKILLS</Link>
            </li>
            <li className="custom-link">
              <Link href="#project">PROJECTS</Link>
            </li>
            <li>
              <Link
                className="custom-button"
                href="#contactus"
              >
                CONTACT US
              </Link>
            </li>
          </ul>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger className="custom-classs">☰</SheetTrigger>
            <SheetContent className="violet">
              <SheetHeader>
                <SheetTitle>          
                  <a href="/">         
                  <h2 className="custom-heading">
                    <span className="text-yellow">M</span>H.
                  </h2>
                  </a>
                </SheetTitle>
                <SheetDescription>
                <ul className="custom-list">
                  <li className="custom-links">
                    <Link href="/home">HOME</Link>
                  </li>
                  <li className="custom-links">
                    <Link href="#about">ABOUT ME</Link>
                  </li>
                  <li className="custom-links">
                    <Link href="#skill">SKILLS</Link>
                  </li>
                  <li className="custom-links">
                    <Link href="#project">PROJECTS</Link>
                  </li>
                  <li className="op">
                    <Link
                      className="custom-buttonm"
                      href="#contactus"
                    >
                      CONTACT US
                    </Link>
                  </li> 
                </ul>
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>



          {/* <div
            className={`fixed inset-y-0 right-0 w-1/2 h-full bg-violet-900 bg-opacity-90 z-50 transform ${
              isOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
            } transition-transform duration-300 ease-in-out lg:hidden`}
          >
            <div className="flex justify-between items-center p-4">
              <h2 className="font-serif text-white font-bold text-4xl">
                <span className="text-yellow-500">M</span>H.
              </h2>
              <button
                className="text-white text-3xl focus:outline-none"
                onClick={toggleMenu}
              >
                ×
              </button>
            </div>
            <ul className="font-sans flex flex-col gap-6 p-4 text-lg">
              <li className="text-white hover:text-yellow-500">
                <Link href="/">HOME</Link>
              </li>
              <li className="text-white hover:text-yellow-500">
                <Link href="#about">ABOUT</Link>
              </li>
              <li className="text-white hover:text-yellow-500">
                <Link href="#skill">SKILLS</Link>
              </li>
              <li className="text-white hover:text-yellow-500">
                <Link href="#project">PROJECTS</Link>
              </li>
              <li>
                <Link
                  className="text-base px-4 py-2 drop-shadow-lg text-white bg-gradient-to-r from-violet-500 to-yellow-500 hover:from-yellow-500 to-violet-500 animate-pulse rounded-xl"
                  href="#contactus"
                >
                  CONTACT US
                </Link>
              </li>
            </ul>
          </div> */}
        </nav>
      </header>
    </div>
  );
}

export default Header;
