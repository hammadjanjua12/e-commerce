import { api } from "../../config/apiConfig";
import {
  FIND_PRODUCTS_FAILURE,
  FIND_PRODUCTS_REQUEST,
  FIND_PRODUCTS_SUCCESS,
  FIND_PRODUCT_BY_ID_FAILURE,
  FIND_PRODUCT_BY_ID_REQUEST,
  FIND_PRODUCT_BY_ID_SUCCESS,
} from "./ActionType";

export const findProducts = (reqData) => async (dispatch) => {
  dispatch({ type: FIND_PRODUCTS_REQUEST });

  const {
    colors,
    size,
    minPrice,
    maxPrice,
    minDiscount,
    category,
    stock,
    sort,
    pageNumber,
    pageSize,
  } = reqData;
  console.log("Size before API request:", size);
  console.log("discountedPrice-----",minDiscount)
  try {
    const {data} = await api.get(`/api/products?category=${category}&color=${colors}&size=${size}&pageNumber=${pageNumber}&pageSize=${pageSize}&minDiscount=${minDiscount}`)
    
    console.log("product Data",data)
    dispatch({ type: FIND_PRODUCTS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: FIND_PRODUCTS_FAILURE, payload: error.message });
  }
};

export const findProductsById = (reqData) => async (dispatch) => {
  dispatch({ type: FIND_PRODUCT_BY_ID_REQUEST });
  
  const { productId } = reqData;
  console.log("product ID :",productId)

  try {
    const  {data}  = await api.get(`/api/products/id/${productId}`);
    console.log("Data",data);
    dispatch({ type: FIND_PRODUCT_BY_ID_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: FIND_PRODUCT_BY_ID_FAILURE, payload: error.message });
  }
};
// &minPrice=${minPrice}&maxPrice=${maxPrice}&minDiscount=${minDiscount}
    // &sort=${sort}&pageNumber=${pageNumber}`)