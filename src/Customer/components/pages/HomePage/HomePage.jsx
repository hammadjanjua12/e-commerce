import React from "react";
import MainCrosel from "../../HomeCarosel/MainCrosel";
import Banner from '../../Banner/Banner';
import HomeSectionCarosel from "../../HomeSectionCarosel/HomeSectionCarosel";
import { mens_kurta } from "../../../../Data/mens_kurta";

const HomePage = () => {
  return (
    <div>
      <MainCrosel />

      <div
      className="py-20 space-y-10  flex flex-col justify-center px-5 lg:px-30"
      >
        <HomeSectionCarosel data={mens_kurta} sectionName={"Men's Kurta"}/>
        <HomeSectionCarosel data={mens_kurta} sectionName={"Men's Shoes"}/>
        <Banner/>
        <HomeSectionCarosel data={mens_kurta} sectionName={"Men's Shirt"}/>
        <HomeSectionCarosel data={mens_kurta} sectionName={"Men's Saree"}/>
        <HomeSectionCarosel data={mens_kurta} sectionName={"Men's Dress"}/>
      </div>
    </div>
  );
};

export default HomePage;
