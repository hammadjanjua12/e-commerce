import axios from "axios";

export const API_BASE_URL = "https://newvisionclothingbackend.netlify.app/.netlify/functions/api/";

// Check if JWT exists in localStorage
const jwt = localStorage.getItem("jwt");

// Create Axios instance with or without Authorization header
export const api = axios.create({
  baseURL: API_BASE_URL,
  headers: jwt
    ? {
        Authorization: `Bearer ${jwt}`,
        "Content-Type": "application/json",
      }
    : {
        "Content-Type": "application/json",
      },
});
