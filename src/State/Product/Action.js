import { API_BASE_URL, api } from "../../config/apiConfig";
import {
  CREATE_PRODUCT_FAILURE,
  CREATE_PRODUCT_REQUEST,
  CREATE_PRODUCT_SUCCESS,
  DELETE_PRODUCT_FAILURE,
  DELETE_PRODUCT_REQUEST,
  DELETE_PRODUCT_SUCCESS,
  FIND_PRODUCTS_FAILURE,
  FIND_PRODUCTS_REQUEST,
  FIND_PRODUCTS_SUCCESS,
  FIND_PRODUCT_BY_ID_FAILURE,
  FIND_PRODUCT_BY_ID_REQUEST,
  FIND_PRODUCT_BY_ID_SUCCESS,
} from "./ActionType";

export const findAllProducts = (reqData) => async (dispatch) => {
  dispatch({ type: FIND_PRODUCTS_REQUEST });
  const {
    pageNumber,
    pageSize,
  } = reqData;
  try {
    const {data} = await api.get(`${API_BASE_URL}api/products?&pageNumber=${pageNumber}&pageSize=${pageSize}`)
    
    console.log("All Product Data",data)
    dispatch({ type: FIND_PRODUCTS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: FIND_PRODUCTS_FAILURE, payload: error.message });
  }
};

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
  try {
    const {data} = await api.get(`${API_BASE_URL}/api/products?category=${category}&color=${colors}&size=${size}&pageNumber=${pageNumber}&pageSize=${pageSize}&minDiscount=${minDiscount}&minPrice=${minPrice}&maxPrice=${maxPrice}&sort=${sort}`)

   
    
    console.log("Fillter Product Data",data)
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
    // &sort=${sort}&pageNumber=${pageNumber}&stock=${stock}`)
    
    //?category=${category}&color=${colors}&pageNumber=${pageNumber}&pageSize=${pageSize}

    // ?&color=${colors}&size=${size}&pageNumber=${pageNumber}&pageSize=${pageSize}&category=${category}


// Admin Side 
export const createProduct=(product)=>async(dispatch)=>{
  try {
    dispatch({type:CREATE_PRODUCT_REQUEST})
    const {data} =await api.post(`${API_BASE_URL}/api/admin/products`,product);
    console.log("created Product",product)
    dispatch({
      type:CREATE_PRODUCT_SUCCESS,
      payload:data,
    })
  } catch (error) {
    dispatch({ type: CREATE_PRODUCT_FAILURE, payload: error.message });
  }
}

export const deleteProduct=(productId)=>async(dispatch)=>{
  try {
    dispatch({type:DELETE_PRODUCT_REQUEST})
    const {data} =await api.delete(`${API_BASE_URL}/api/admin/products/${productId}`);
    console.log("Delete data:-",data)
    dispatch({
      type:DELETE_PRODUCT_SUCCESS,
      payload:productId,
    })
  } catch (error) {
    dispatch({ type: DELETE_PRODUCT_FAILURE, payload: error.message });
  }
}