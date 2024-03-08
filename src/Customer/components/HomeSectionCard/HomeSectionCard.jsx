import { useDispatch } from "react-redux";
import { addToWishlist, removeFromWishlist, updateWishlistCount } from "../../../State/Wishlist/Action";
import { Link } from "react-router-dom";
import FavoriteIcon from '@mui/icons-material/Favorite'; 
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'; 
import { useState } from "react";

const HomeSectionCard = ({ product, onClick }) => {
  const dispatch = useDispatch();
  const [iconColor, setIconColor] = useState(product?.isInWishlist ? 'red' : 'gray');

  const handleToggleWishlist = (productId, isInWishlist) => {
    // Retrieve current wishlist count from localStorage
    const storedCount = localStorage.getItem("wishlistCount");
    const wishlistCount = storedCount !== null ? parseInt(storedCount, 10) : 0;

    if (isInWishlist) {
      dispatch(removeFromWishlist(productId));
      dispatch(updateWishlistCount(wishlistCount - 1));
      setIconColor('gray');  // Decrement the wishlist count
    } else {
      dispatch(addToWishlist(productId));
      dispatch(updateWishlistCount(wishlistCount + 1));
      setIconColor('red'); // Increment the wishlist count
    }
  };

  return (
    <Link to={`/product/${product?._id}`}>
      <div
        className="relative cursor-pointer flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden w-[15rem] mx-3 border mb-4" // Added mb-4 for margin-bottom
        onClick={onClick}
        data-aos="fade-up"
      >
        {/* Wishlist Icon - Click to toggle wishlist */}
        <span
          className="cursor-pointer absolute top-2 right-2 text-red-500"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            handleToggleWishlist(product?._id, product?.isInWishlist);
          }}
        >
          {product?.isInWishlist ? (
            <FavoriteIcon style={{ color: 'red' }} />
          ) : (
            <FavoriteBorderIcon style={{ color: 'gray' }} />
          )}
        </span>

        <div className="h-[13rem] w-[10rem]">
          <img className="object-cover object-top w-full h-full" src={product?.imageUrl} alt="" />
        </div>

        <div className="p-4" data-aos="fade-up">
          <h3 className="text-lg font-medium text-gray-700 overflow-hidden line-clamp-1">{product?.brand}</h3>
          <p className="mt-2 text-sm text-gray-700 line-clamp-1">{product?.title}</p>
          <div className="flex">
            <p className="text-sm text-green-700">${product?.price}</p>
            <p className="ml-2 text-sm text-gray-700 line-through">${product?.discountedPrice}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default HomeSectionCard;
