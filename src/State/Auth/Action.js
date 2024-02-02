import axios from "axios";
import { API_BASE_URL } from "../../config/apiConfig";
import { GET_USER_FAILURE, GET_USER_REQUEST, GET_USER_SUCCESS, LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT, REGISTER_FAILURE, REGISTER_REQUEST, REGISTER_SUCCESS } from "./ActionType";
//get and save token
const token = localStorage.getItem("jwt")


//SignUp ActionType
const registerRequest = () => ({type:REGISTER_REQUEST});
const registersuccess = (user) => ({type:REGISTER_SUCCESS,payload:user});
const registerfaliure = (error) => ({type:REGISTER_FAILURE,payload:error});

export const register = (userData) => async (dispatch) =>{
    dispatch(registerRequest())
    try {
        const response = await axios.post(`${API_BASE_URL}/auth/signup`,userData)
        const user = response.data;
        if(user.jwt){
            localStorage.setItem("jwt",user.jwt)
        }
        console.log("signUp",user)
        dispatch(registersuccess(user.jwt))
    } catch (error) {
        dispatch(registerfaliure(error.message))
    }
}

//Signin ActionType
const loginRequest = () => ({type:LOGIN_REQUEST});
const loginsuccess = (user) => ({type:LOGIN_SUCCESS,payload:user});
const loginfaliure = (error) => ({type:LOGIN_FAILURE,payload:error});

export const login = (userData )=> async (dispatch) =>{
    dispatch(loginRequest())
    try {
        const response = await axios.post(`${API_BASE_URL}/auth/signin`,userData)
        const user = response.data;
        if(user.jwt){
            localStorage.setItem("jwt",user.jwt)
        }
        console.log("Signin",user)
        dispatch(loginsuccess(user.jwt))
    } catch (error) {
        dispatch(loginfaliure(error.message))
    }
}



//GetUser ActionType
const getUserRequest = () => ({type:GET_USER_REQUEST});
const getUsersuccess = (user) => ({type:GET_USER_SUCCESS,payload:user});
const getUserfaliure = (error) => ({type:GET_USER_FAILURE,payload:error});

export const getUser = (jwt) => async (dispatch) =>{
    dispatch(getUserRequest())
    try {
        const response = await axios.get(`${API_BASE_URL}/api/users/profile`,{
            headers:{
                "Authorization":`Bearer ${jwt}`
            }
        })
        const user = response.data;
        console.log("Profiles",user)
        dispatch(getUsersuccess(user))
    } catch (error) {
        dispatch(getUserfaliure(error.message))
    }
}

export const logout = ()=>(dispatch)=>{
    dispatch({type:LOGOUT,payload:null})
    localStorage.clear();
}