import React from "react";

const HeroSection = () => {
  return (
    <div
      className="hero-section d-flex align-items-center text-light mt-2.5"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '80vh',
      }}
    >
      <div className="container text-center">
        <h1 className="display-4 fw-bold">
          Elevate Your Style with <span className="text-warning">The Trendzy</span>
        </h1>
        <p className="lead">
          Discover the latest trends in fashion and redefine your wardrobe. 
          Quality and style that speaks for you.
        </p>
        {/* <div className="mt-4">
          <a href="#shop" className="btn btn-warning btn-lg me-3">
            Shop Now
          </a>
          <a href="#collection" className="btn btn-outline-success btn-lg">
            Explore Collection
          </a>
        </div> */}
      </div>
    </div>
  );
};

export default HeroSection;
