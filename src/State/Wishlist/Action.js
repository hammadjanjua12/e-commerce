import axios from 'axios';
import { ADD_TO_WISHLIST_SUCCESS, GET_WISHLIST_SUCCESS,REMOVE_FROM_WISHLIST_SUCCESS,UPDATE_WISHLIST_COUNT } from '../Wishlist/ActionType';
import { API_BASE_URL, api } from '../../config/apiConfig';

export const addToWishlist = (productId) => async (dispatch) => {
    try {
      await api.post(`${API_BASE_URL}/api/wishlist/${productId}`);
      dispatch({ type: ADD_TO_WISHLIST_SUCCESS, payload: productId });
      console.log("Added Succesfull",productId)
    } catch (error) {
      console.error(error);
    }
  };
  
  export const getWishlist = () => async (dispatch) => {
    try {
      const response = await api.get(`${API_BASE_URL}/api/wishlist`);
      dispatch({ type: GET_WISHLIST_SUCCESS, payload: response.data });
    } catch (error) {
      console.error(error);
    }
  };
  export const updateWishlistCount = (count) => ({
    type: UPDATE_WISHLIST_COUNT,
    payload: count,
  });

  export const removeFromWishlist = (productId) => async (dispatch) => {
    try {
      console.log('Removing product from wishlist. Product ID:', productId);
  
      // Make the API request to remove the item
      await api.delete(`${API_BASE_URL}/api/wishlist/${productId}`);
  
      // Dispatch the action
      dispatch({ type: REMOVE_FROM_WISHLIST_SUCCESS, payload: productId });
  
      console.log('Product removed from wishlist successfully');
    } catch (error) {
      console.error(error);
    }
  };
  
  
  
  