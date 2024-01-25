import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const HomeSectionCard = ({ product }) => {
    // Initialize AOS inside the component
    AOS.init();

    return (
        <div
            className="cursor-pointer flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden w-[15rem] mx-3 border"
            data-aos="fade-up"
        >
            <div className="h-[13rem] w-[10rem]" data-aos="fade-down">
                <img
                    className="object-cover object-top w-full h-full"
                    src={product.imageUrl}
                    alt=""
                />
            </div>

            <div className="p-4" data-aos="fade-up">
                <h3 className="text-lg font-medium text-gray-700">
                    {product.brand}
                </h3>
                <p className="mt-2 text-sm text-gray-700">
                    {product.title}
                </p>
            </div>
            
        </div>
    );
};







export default HomeSectionCard;
