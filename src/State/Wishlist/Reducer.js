import {
  ADD_TO_WISHLIST_SUCCESS,
  GET_WISHLIST_SUCCESS,
  REMOVE_FROM_WISHLIST_SUCCESS,
  UPDATE_WISHLIST_COUNT,
} from "./ActionType";

const storedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

const initialState = {
  wishlist: storedWishlist,
  wishlistCount: storedWishlist.length,
  message: '',
};

const wishlistReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_WISHLIST_SUCCESS:
      return {
        ...state,
        wishlist: [...state.wishlist, action.payload],   
      };

    case GET_WISHLIST_SUCCESS:
      return {
        ...state,
        wishlist: action.payload,
      };

    case UPDATE_WISHLIST_COUNT:
      return {
        ...state,
        wishlistCount: action.payload,
      };
      // Update REMOVE_FROM_WISHLIST_SUCCESS case in your reducer
case REMOVE_FROM_WISHLIST_SUCCESS:
  const productIdToRemove = action.payload;
  const updatedWishlist = state.wishlist.map(item =>
    item.product._id === productIdToRemove
      ? { ...item, isInWishlist: false } // Set isInWishlist to false for the removed item
      : item
  );

  localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));

  return {
    ...state,
    wishlist: updatedWishlist,
  };

      

    default:
      return state;
  }
};

export default wishlistReducer;
