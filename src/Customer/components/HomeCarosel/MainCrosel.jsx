import React from "react";
import { mainCarouselData } from "./MainCroselData";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

function MainCrosel() {
  const items = mainCarouselData.map((item, index) => (
    <img
      key={index}
      className="cursor-pointer w-full h-auto"
      role="presentation"
      src={item.image}
      alt=""
    />
  ));

  return (
    <div style={{ width: "100%", margin: 0 }}>
      <AliceCarousel
        items={items}
        disableButtonsControls
        autoPlay
        autoPlayInterval={1000}
        infinite
      />
    </div>
  );
}

export default MainCrosel;
