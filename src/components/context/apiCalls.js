import axios from "axios"
import { getUserFailure, getUserStart, getUserSuccess } from "./Action";


export const getUser = async (dispatch) => {
    dispatch(getUserStart());
    try{
        const res = await axios.get("https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/1");
        console.log(res.data);
        dispatch(getUserSuccess(res.data));
      }catch(err){
        dispatch(getUserFailure());
      }
};