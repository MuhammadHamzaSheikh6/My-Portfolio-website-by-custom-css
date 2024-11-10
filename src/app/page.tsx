import Link from 'next/link';
import { FC } from 'react';

const Wel: FC = () => {
  return (
    <div className="container">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="background"
      >
        <source src="/bg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Welcome Text */}
      <div className="text-wel">
        <h1 className="bold">Welcome to My Portfolio</h1>
        <p className="auto">
          Bringing ideas to life on the web. Here&apos;s a sneak peek into my work and passion!
        </p>

        {/* Button to navigate to home page */}
        <Link href="/home">
        <button className="bu">
          Explore My Work
        </button>

        </Link>
      </div>
    </div>
  );
};

export default Wel;
