import React, { useState, useEffect } from 'react';
import TestimonialCardData from "../dummyData";
import TestimonialCard from "../components/TestimonialCard";

const TestimonialSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % TestimonialCardData.length);
    }, 2000); // Move every 2 seconds

    return () => clearInterval(interval); // Clean up the interval on unmount
  }, []);

  useEffect(() => {
    if (currentIndex === TestimonialCardData.length) {
      setCurrentIndex(0);
    }
  }, [currentIndex]);

  return (
    <div className='bg-theme-red h-[70vh] overflow-hidden'>
      <h3 className='text-center text-[2rem] pt-9 uppercase'>Testimonials</h3>
      <h1 className='text-center text-[3rem] text-white font-bold'>
        Some Lovely Feedback From <br /> Our Clients
      </h1>

      <div className="relative w-full h-full mt-[3rem] overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${(currentIndex * 100) / 4}%)` }}
        >
          {TestimonialCardData.map((data, index) => (
            <div className="w-1/4 flex-shrink-0" key={index}>
              <TestimonialCard data={data} />
            </div>
          ))}
          {TestimonialCardData.slice(0, 4).map((data, index) => (
            <div className="w-1/4 flex-shrink-0" key={index + TestimonialCardData.length}>
              <TestimonialCard data={data} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;

