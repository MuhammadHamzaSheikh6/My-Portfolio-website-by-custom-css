import "./about.css"
import Image from 'next/image';

function About() {
    return (
        <section className='bgWhitePadding'>
            <div id="about" className="textCenterPaddingTop">
                <h1 className="largeBoldVioletText">About Us</h1>
                <p className='fontbold '><i>E-Commerce by chance | Developer by choice</i></p>
                <span className="customDivider"></span>
            </div>

            <div className='responsiveFlex'>
                <div className='flexCenterResponsive flex1'>
                    <div className="relativeFlexCenterAnimate">
                        <div className="relativeSpinHover">
                            <Image
                                className="roundedProfileImage"
                                src="/hamza2.jpg"
                                alt="Profile Image" 
                                width={300} // Width of the image
                                height={300} // Height of the image
                            />
                            <div className="gradientBackground"></div>
                        </div>
                    </div>
                </div>
                <div className='flex1'>
                    <p className=''>
                        <span className='custom-title '>Hi,</span><br /> 
                        I&apos;m Hamza, a web developer specializing in Next.js and Tailwind CSS. I&apos;m passionate about creating 
                        modern, responsive websites that offer excellent user experiences. With a strong focus on emerging technologies 
                        like AI, Metaverse, and Web 3.0, I continuously strive to stay at the forefront of innovation. <br /><br /> 
                        My journey into tech has been fueled by a love for learning and growth, and I&apos;m always exploring new ways to refine my skills. 
                        I&apos;m dedicated to building strong client relationships through quality work and creative problem-solving, ensuring 
                        that each project meets the highest standards. <br /><br />
                        Whether you&apos;re looking to create a cutting-edge website or need a developer to bring your vision to life, I&apos;m here to help. 
                        Let&apos;s collaborate and turn your ideas into impactful web solutions!
                    </p>
                </div>
            </div>
            <span className="custom-block"></span>
        </section>
    );
}

export default About;
