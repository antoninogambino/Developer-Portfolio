import React from 'react';
import './style.css';

const Home = () => {
  return (
    <div className="home-container">
      <h1 className="home-title">Antonino Gambino</h1>
      <div className="centered-content">
        <img src={require('./headshot.jpg')} alt="Headshot" className="headshot" />
        <p>I am a passionate and dedicated professional striving to create meaningful and impactful experiences through my work.</p>
        <p>With a strong focus on creativity, innovation, and attention to detail, I aim to deliver exceptional results that exceed expectations. Through effective collaboration and a commitment to continuous learning, I strive to make a positive difference and leave a lasting impression in every project I undertake.</p>
        <p>This is my portfolio site.</p>
      </div>
    </div>
  );
};

export default Home;
