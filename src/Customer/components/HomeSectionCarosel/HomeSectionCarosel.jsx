import React, { useState, useEffect } from "react";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
import AliceCarousel from "react-alice-carousel";
import AOS from "aos";
import "aos/dist/aos.css";

const HomeSectionCarosel = ({ data, sectionName }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    AOS.init();
  }, []);

  const responsive = {
    0: {
      items: 1,
    },
    720: {
      items: 3,
    },
    1024: {
      items: 6,
    },
  };

  const handleSlideChange = (index) => setActiveIndex(index);

  const items = data.slice(0, 10).map((item) => (
    <HomeSectionCard key={item.id} product={item} />
  ));

  return (
    <div className="border">
      <h2
        className="text-2xl font-extralight text-decoration-line: underline text-gray-800 text-center py-3"
        data-aos="fade-down"
      >
        {sectionName}
      </h2>
      <div className="relative p-5">
        <AliceCarousel
          items={items}
          disableDotsControls
          responsive={responsive}
          onSlideChanged={handleSlideChange}
          startIndex={activeIndex}
        />
      </div>
    </div>
  );
};

export default HomeSectionCarosel;
