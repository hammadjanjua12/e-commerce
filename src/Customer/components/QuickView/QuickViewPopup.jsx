import React, { useState } from "react";
import { Box, Modal, Typography, CircularProgress } from "@mui/material";
import { Close } from "@mui/icons-material";
import { Link } from "react-router-dom";

const QuickViewPopup = ({ product, onClose }) => {
  const [loading, setLoading] = useState(false);

  return (
    
    <Modal
      open={true} // Ensuring the popup is always open for demonstration
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 500,
          bgcolor: "background.paper",
          outline: "none",
          boxShadow: 24,
          p: 4,
        }}
      >
        <div className="flex justify-end">
          <button
            className="text-gray-500 hover:text-gray-800"
            onClick={onClose}
          >
            <Close />
          </button>
        </div>
        
        <Typography id="modal-modal-title" variant="h6" component="h2">
          {product.title}
        </Typography>
        <Link to={`/product/${product._id}`}>
        <img
          src={product.imageUrl}
          alt={product.title}
          className="mx-auto mb-4 max-h-80"
        />
        </Link>
        <Typography className="line-clamp-2" id="modal-modal-description" sx={{ mt: 2 }}>
          {product.description}
        </Typography>
        <div className="mt-4">
          <span className="text-gray-600 text-sm line-through mr-2">
            ${product.discountedPrice}
          </span>
          <span className="text-red-600 text-lg font-semibold mr-2">
            ${product.price}
          </span>
          <span className="text-green-600 text-lg font-semibold">
            {product.discountPercent}% Off
          </span>
        </div>
        
        {/* <button
          className="mt-4 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300"
          onClick={handleAddToCart}
          disabled={loading} // Disable the button when loading
        >
          {loading ? <CircularProgress size={24} /> : "Add to Cart"}
        </button> */}
      </Box>
    </Modal>
    
  );
};

export default QuickViewPopup;
