import {
  CANCELED_ORDER_FALIURE,
  CANCELED_ORDER_REQUEST,
  CANCELED_ORDER_SUCCESS,
  CONFIRMED_ORDER_FALIURE,
  CONFIRMED_ORDER_REQUEST,
  CONFIRMED_ORDER_SUCCESS,
  DELETE_ORDER_FALIURE,
  DELETE_ORDER_REQUEST,
  DELETE_ORDER_SUCCESS,
  DELIVERED_ORDER_FALIURE,
  DELIVERED_ORDER_REQUEST,
  DELIVERED_ORDER_SUCCESS,
  GET_ORDERS_FALIURE,
  GET_ORDERS_REQUEST,
  GET_ORDERS_SUCCESS,
  PLACED_ORDER_FALIURE,
  PLACED_ORDER_REQUEST,
  PLACED_ORDER_SUCCESS,
  SHIP_ORDER_FALIURE,
  SHIP_ORDER_REQUEST,
  SHIP_ORDER_SUCCESS,
} from "./ActionType";

const initialState = {
  loading: false,
  orders: [],
  error: "",
};

export const adminOrderReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ORDERS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_ORDERS_SUCCESS:
      return {
        loading: false,
        orders: action.payload,
        error: "",
      };
    case GET_ORDERS_FALIURE:
      return {
        loading: false,
        orders: [],
        error: action.payload,
      };
    case CONFIRMED_ORDER_REQUEST:
    case PLACED_ORDER_REQUEST:
    case DELIVERED_ORDER_REQUEST:
    case CANCELED_ORDER_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case CONFIRMED_ORDER_SUCCESS:
      return {
        ...state,
        confirmed: action.payload,
        isloading: false,
      };
    case PLACED_ORDER_SUCCESS:
      return {
        ...state,
        placed: action.payload,
        isLoading: false,
      };
    case DELIVERED_ORDER_SUCCESS:
      return {
        ...state,
        delivered: action.payload,
        isLoading: false,
      };
    case CANCELED_ORDER_SUCCESS:
      return {
        ...state,
        canceled: action.payload,
        isLoading: false,
      };
    case CONFIRMED_ORDER_FALIURE:
    case PLACED_ORDER_FALIURE:
    case DELIVERED_ORDER_FALIURE:
    case CANCELED_ORDER_FALIURE:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    case DELETE_ORDER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case DELETE_ORDER_SUCCESS:
      return {
        ...state,
        loading: false,
        deleteOrder: action.payload
      };
    case DELETE_ORDER_FALIURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case SHIP_ORDER_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case SHIP_ORDER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        shipped: action.payload,
      };
    case SHIP_ORDER_FALIURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
