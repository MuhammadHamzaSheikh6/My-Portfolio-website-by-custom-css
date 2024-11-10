'use client';
import "./project.css"
import { useState, useEffect } from "react";
import Image from "next/image";

interface Project {
  title: string;
  description: string;
  imgSrc: string;
  link: string; // Add link property
  imglink: string;
}

const projects: Project[] = [
  {
    title: "E-Commerce Website",
    description:
      "This e-commerce website is built with Next.js and Tailwind CSS, offering a modern and responsive design. It provides a smooth, user-friendly experience across all devices.",
    imgSrc: "/project/ec.png",
    link: "https://github.com/MuhammadHamzaSheikh6/E-Commerce", // Replace with your link
    imglink: "https://t-shirts-e-commerce.vercel.app/",
  },
  {
    title: "Dynamic Resume Builder",
    description:
      "A resume builder built with HTML, CSS, and TypeScript that allows users to create and customize resumes in real-time with an interactive form.",
    imgSrc: "/project/cv.png",
    link: "https://github.com/MuhammadHamzaSheikh6/Dynamic-Resume-Builder", // Replace with your link
    imglink: "https://dynamic-resume-builder6067.vercel.app/",
  },
  {
    title: "Real Estate Website",
    description:
      "A dynamic real estate platform for showcasing property listings, built with Next.js and integrated with a map API.",
    imgSrc: "/project/ma.png",
    link: "https://github.com/MuhammadHamzaSheikh6/Real-state-website", // Replace with your link
    imglink: "https://real-state-website-puce.vercel.app/",
  },
];

export default function ProjectSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const handlePrevious = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + projects.length) % projects.length
    );
  };

  // Automatic slider change every 5 seconds
  useEffect(() => {
    const intervalId = setInterval(() => {
      handleNext();
    }, 5000); // Change the project every 5000 milliseconds (5 seconds)

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  const { title, description, imgSrc, link, imglink } = projects[currentIndex];

  return (
    <section id="project" className="project-sectionn">
      <h3 className="project-headerr">Projects</h3>
      <div className="flex-centerr">
        <div className="custom-containerr">
          {/* Left Section */}
          <div className="custom-marginn">
            <h3 className="custom-textt">{title}</h3>
            <p className="custom-text-justifyy ">{description}</p>
            <a href={link} target="_blank" rel="noopener noreferrer">
              {/* Link for the button */}
              <button className="custom-buttonn">
                More Details
              </button>
            </a>
          </div>

          {/* Right Section */}
          <div>
            <a href={imglink} target="_blank" rel="noopener noreferrer">
              {/* Link for the image */}
              <Image
                src={imgSrc}
                alt={title}
                width={500}
                height={700}
                className="custom-imageee"
              />
            </a>
          </div>

          {/* Arrow Buttons */}
          <button
            onClick={handlePrevious}
            className="custom-arrow-button"
          >
            &lt;
          </button>
          <button
            onClick={handleNext}
            className="custom-buttonrr"
          >
            &gt;
          </button>
        </div>
      </div>
    </section>
  );
}
