import React from 'react';
import img1 from '../assets/tomato (1).png';
import img2 from '../assets/tomato.png';
import img3 from '../assets/tomato (6).png';
import img4 from '../assets/toamto (2).png';
import img5 from '../assets/tomato (6).png';


const images = [img1, img2, img3, img4, img5, img3, img2, img1, img3]; // Array of image sources

const Arrival = () => {
  return (
    <div className="p-4">
      <div className="text-center mb-20 mt-20">
        <h1 className="text-3xl font-bold">New Arrivals</h1>
      </div>
      <div className="grid gap-4 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {images.map((img, index) => (
          <div key={index} className="mx-auto">
            <img src={img} alt={`New Arrival ${index + 1}`} className="w-48  h-48 p-6  object-cover shadow-2xl bg-white transform transition duration-300 hover:scale-105" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Arrival;
