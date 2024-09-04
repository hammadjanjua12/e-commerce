import React, { useEffect } from "react";

const AddToCartMessage = ({ onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose(); // Close the message after 3 seconds
    }, 3000);

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="fixed top-0 w-full bg-green-500 text-white p-4 text-center">
      Item added to cart
    </div>
  );
};

export default AddToCartMessage;
