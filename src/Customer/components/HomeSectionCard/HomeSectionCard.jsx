import { useDispatch, useSelector } from "react-redux";
import {
  addToWishlist,
  removeFromWishlist,
  updateWishlistCount,
} from "../../../State/Wishlist/Action";
import { Link } from "react-router-dom";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useEffect, useState } from "react";
import { API_BASE_URL, api } from "../../../config/apiConfig";
import QuickViewPopup from "../QuickView/QuickViewPopup";
import SizeDialog from "../SizeDialog/SizeDialog";
import { ADD_ITEM_TO_CART_SUCCESS } from "../../../State/Cart/ActionType";

const HomeSectionCard = ({ product, onClick }) => {
  const dispatch = useDispatch();
  const { wishlist } = useSelector((state) => state.wishlist);
  const [isInWishlist, setIsInWishlist] = useState(false); // Initialize with default value false
  const [showQuickView, setShowQuickView] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [selectedSize, setSelectedSize] = useState("");
  const [showSizeDialog, setShowSizeDialog] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [addedProduct, setAddedProduct] = useState(null);

  useEffect(() => {
    // Check if the product is in the wishlist and update the state accordingly
    const foundInWishlist = wishlist.some((item) => item._id === product._id);
    setIsInWishlist(foundInWishlist);
  }, [product._id, wishlist]);

  const handleToggleWishlist = async () => {
    try {
      if (isInWishlist) {
        // Remove the product from the wishlist
        await api.delete(`${API_BASE_URL}/api/wishlist/${product._id}`);
        await dispatch(removeFromWishlist(product._id));
        await dispatch(updateWishlistCount(wishlist.length - 1));
        setIsInWishlist(false); // Update local state
        localStorage.removeItem(`wishlistColor_${product._id}`);
      } else {
        // Add the product to the wishlist
        await dispatch(addToWishlist(product._id));
        await dispatch(updateWishlistCount(wishlist.length + 1));
        setIsInWishlist(true); // Update local state
        localStorage.setItem(`wishlistColor_${product._id}`, "red");
      }
    } catch (error) {
      console.error("Error toggling wishlist:", error);
    }
  };

  const handleToggleQuickView = () => {
    setShowQuickView(!showQuickView);
  };

  const handleAddToCart = async () => {
    // Show size dialog when adding to cart
    setShowSizeDialog(true);
  };

  const handleConfirmSize = async () => {
    try {
      if (!product._id) {
        console.error("Product ID is required.");
        return;
      }

      if (!selectedSize) {
        console.error("Size is required.");
        return;
      }
      // Add the product to the cart with the selected size
      await api.put("/api/cart/add", {
        productId: product._id,
        size: selectedSize,
      });

      // Dispatch an action to update the cart state
      dispatch({
        type: ADD_ITEM_TO_CART_SUCCESS,
        payload: { ...product, size: selectedSize },
      });

      // Close the size dialog
      setShowSizeDialog(false);

      // Update the added product details for the message
      setAddedProduct({ id: product._id, size: selectedSize });

      // Show the message
      setShowMessage(true);

      // Log confirmation message
      console.log(
        "Added Product to Cart:",
        product.title,
        "Size:",
        selectedSize
      );

      setTimeout(() => {
        setShowMessage(false);
      }, 5000);
    } catch (error) {
      console.error("Error adding to cart:", error);
    }
  };

  return (
    <div className="relative mb-8">
      <div
        className="relative cursor-pointer flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden w-[15rem] mx-3 border mb-4"
        onClick={onClick}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <span
          className="cursor-pointer absolute top-2 right-2 text-red-500 z-10"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            handleToggleWishlist();
          }}
          style={{ opacity: hovered ? 1 : 0 }}
        >
          {isInWishlist ? (
            <FavoriteIcon style={{ color: "red" }} />
          ) : (
            <FavoriteBorderIcon style={{ color: "gray" }} />
          )}
        </span>
        <span
          className="cursor-pointer absolute top-12 right-2 text-gray-500 z-10"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            handleToggleQuickView();
          }}
          style={{ opacity: hovered ? 1 : 0 }}
        >
          <VisibilityIcon />
        </span>
        <span
          className={`cursor-pointer absolute top-20 right-2 text-gray-500 z-10 `}
          onClick={handleAddToCart} // Use handleAddToCart instead of handleOpenSizeDialog
          style={{ opacity: hovered || showSizeDialog ? 1 : 0 }}
        >
          <ShoppingCartIcon />
        </span>
        <Link to={`/product/${product._id}`}>
          <div className="h-[13rem] w-[10rem]">
            <img
              className="object-cover object-top w-full h-full"
              src={product.imageUrl}
              alt=""
            />
          </div>

          <div className="p-4" data-aos="fade-up">
            <h3 className="text-lg font-medium text-gray-700 overflow-hidden line-clamp-1">
              {product.brand}
            </h3>
            <p className="mt-2 text-sm text-gray-700 line-clamp-1">
              {product.title}
            </p>
            <div className="flex">
              <p className="text-sm mt-2 ">${product.price}</p>
              <p className="ml-2 mt-2 text-sm text-gray-700 line-through">
                ${product.discountedPrice}
              </p>
              <p className="ml-2 mt-2 text-sm text-green-700">
                {product.discountPercent}% Off
              </p>
            </div>
          </div>
        </Link>
      </div>
      {showQuickView && (
        <QuickViewPopup
          product={product}
          onClose={() => setShowQuickView(false)}
        />
      )}
      {showSizeDialog && (
        <SizeDialog
          onClose={() => setShowSizeDialog(false)}
          onSelectSize={(size) => {
            setSelectedSize(size);
            handleConfirmSize();
          }}
        />
      )}

      {/* Existing code... */}
      {showMessage && (
  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-green-500 text-white text-sm py-1 px-2 rounded-lg">
    <span className="block sm:inline">
      {`Item added to cart `}
    </span>
  </div>
)}

    </div>
  );
};

export default HomeSectionCard;
