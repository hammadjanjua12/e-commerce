import React, { useState, useEffect } from "react";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
import AliceCarousel from "react-alice-carousel";
import { api } from "../../../config/apiConfig"; // Import your API configuration

const HomeSectionCarosel = ({ apiUrl, sectionName }) => {
  const [data, setData] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get(apiUrl);
        if (response.data.content) {
          // Handle the case where the data is wrapped in a 'content' property
          setData(response.data.content);
        } else if (Array.isArray(response.data)) {
          // Handle the case where the data is an array
          setData(response.data);
        } else {
          console.warn("Unexpected response format:", response.data);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
  
    fetchData();
    
  }, [apiUrl]);

  const responsive = {
    0: {
      items: 1,
      //  stagePadding: { paddingLeft: 10, paddingRight: 10 },
    },
    720: {
      items: 2.5,
      // stagePadding: { paddingLeft: 10, paddingRight: 10 },
    },
    1024: {
      items: 3.5,
      // stagePadding: { paddingLeft: 10, paddingRight: 10 },
    },
    1280: {
      items: 4.5,
      // stagePadding: { paddingLeft: 10, paddingRight: 10 },
    },
  };

  const handleSlideChange = (index) => setActiveIndex(index);

  // Check if data is an array before using slice
  const items = Array.isArray(data) ? data.slice(0, 10) : [];

  return (
    <div className="border">
      <h2
        className="text-2xl font-extralight text-decoration-line: underline text-gray-800 text-center py-3"
        
      >
        {sectionName}
      </h2>
      <div className="relative p-5">
        <AliceCarousel
          items={items.map((item) => (
            <HomeSectionCard key={item.id} product={item} />
          ))}
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