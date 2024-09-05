import React from "react";
import MainCrosel from "../../HomeCarosel/MainCrosel";
import Banner from '../../Banner/Banner';
import HomeSectionCarosel from "../../HomeSectionCarosel/HomeSectionCarosel";

const HomePage = () => {
  const apiUrls = [
    { url: "https://newvisionclothingbackend.netlify.app/.netlify/functions/api/?category=sweater", sectionName: "Women Sweaters" },
    { url: "https://newvisionclothingbackend.netlify.app/.netlify/functions/api/?category=women_dress", sectionName: "Womens Dresses" },
    { url: "https://newvisionclothingbackend.netlify.app/.netlify/functions/api/?category=shirt", sectionName: "Men's Shirt" },
    { url: "https://newvisionclothingbackend.netlify.app/.netlify/functions/api/?category=women_jeans", sectionName: "Women Jeans" },
    { url: "https://newvisionclothingbackend.netlify.app/.netlify/functions/api/?category=jackets", sectionName: "Mens Jackets" },
    // Add more API URLs and section names as needed
  ];
  return (
    <div>
      <MainCrosel />

      <div
      className="py-20 space-y-10  flex flex-col justify-center px-5 lg:px-10"
      >
        {apiUrls.map(({ url, sectionName }) => (
          <HomeSectionCarosel key={url} apiUrl={url} sectionName={sectionName} />
        ))}
        <Banner/>
      </div>
    </div>
  );
};

export default HomePage;