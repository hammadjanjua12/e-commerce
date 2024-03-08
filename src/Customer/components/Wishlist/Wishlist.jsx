import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getWishlist, removeFromWishlist } from '../../../State/Wishlist/Action';
import { API_BASE_URL, api } from '../../../config/apiConfig';

const Wishlist = () => {
  const dispatch = useDispatch();
  const { wishlist } = useSelector((state) => state.wishlist);

  useEffect(() => {
    dispatch(getWishlist());
  }, [dispatch]);

  useEffect(() => {
    console.log('Wishlist State:', wishlist);
  }, [wishlist]);

  const handleRemoveFromWishlist = async (productId) => {
    try {
      console.log('Removing from wishlist:', productId);
  
      // Make the API request to remove the item
      const response = await api.delete(`${API_BASE_URL}/api/wishlist/${productId}`);
      console.log('API Response:', response);
  
      // Dispatch the action
      dispatch(removeFromWishlist(productId));
  
      // Update local storage
      const updatedWishlist = wishlist.filter(item => item.product._id !== productId);
      localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
  
      console.log('Product removed from wishlist successfully');
    } catch (error) {
      console.error('Error removing from wishlist:', error);
    }
  };
  
  return (
    <div className="container mx-auto my-8">
      <h1 className="text-3xl font-semibold mb-4">Wishlist</h1>
      {wishlist.length === 0 ? (
        <p>Your wishlist is empty.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {wishlist.map((item) => (
            <div key={item.product?._id} className="bg-white rounded-lg overflow-hidden shadow-md p-4">
              <img
                src={item.product?.imageUrl}
                alt={item.product?.title}
                className="w-full h-60 object-cover mb-4"
              />
              <div>
                <h3 className="text-lg font-semibold mb-2">{item.product?.title}</h3>
                <p className="text-gray-700 mb-2 line-clamp-2">{item.product?.description}</p>
                <div className="flex justify-between ">
                  <p className="text-gray-800 font-bold">${item.product?.price}</p>
                  <p className="text-gray-500 line-through">${item.product?.discountedPrice}</p>
                </div>
                <p className="text-gray-700">Brand: {item.product?.brand}</p>
                <p className="text-gray-700">Color: {item.product?.color}</p>
              </div>
              <button
                className="mt-4 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
                onClick={() => handleRemoveFromWishlist(item.product?._id)}
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;
