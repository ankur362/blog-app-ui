import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about">
      <div className="about-container">
        <h1 className="about-title">About Us</h1>
        <div className="about-content">
          <img
            src="https://riot-us.com/wp-content/uploads/2023/11/intro-1634607238.webp?w=780" 
            alt="Profile"
            className="about-image"
          />
          <div className="about-text">
            <h2 className="about-subtitle">Welcome to Our Blog</h2>
            <p>
              We are passionate about sharing insights, stories, and resources related to technology, lifestyle, and everything in between. Whether you're looking to learn new skills, stay up-to-date with the latest trends, or find inspiration, our blog is here for you.
            
            <br/>
              <br/>
              Our mission is to provide high-quality content that resonates with our readers. We cover a wide range of topics, from tech tutorials and reviews to personal growth and creative pursuits. Our aim is to inspire and empower individuals on their journey to success.
              <br/>
              <br/>
              Thank you for being a part of our community. We're excited to share our journey with you!
            </p>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
