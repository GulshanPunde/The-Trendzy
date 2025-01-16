import React, { useState } from 'react';
import ShowProduct from '../components/productCard/ShowProduct';
import HeroSection from '../components/extras/HeroSection';


const Home = () => {
  return (
   <div>
    <HeroSection/>
    <ShowProduct/>
   </div>
  );
};

export default Home;
