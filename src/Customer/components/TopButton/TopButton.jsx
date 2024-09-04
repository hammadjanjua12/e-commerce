import React, { useState } from 'react';
import imageSrc from '../../../images/up-arrow.png';

const TopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  window.addEventListener('scroll', toggleVisibility);

  return (
    <div className="fixed bottom-10 right-10 flex flex-col items-center">
      <img
        src={imageSrc}
        alt="Top Button Image"
        className={`w-10 h-10 mb-2 ${isVisible ? 'block' : 'hidden'}`}
        onClick={scrollToTop}
      />
      {/* <button
        className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${isVisible ? 'block' : 'hidden'}`}
        onClick={scrollToTop}
      >
      </button> */}
    </div>
  );
};

export default TopButton;
