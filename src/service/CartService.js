
import axios from "axios";

export const updateCart = async (data) => {
    const res = await  axios.post(`${process.env.REACT_APP_API_URL}/cart/update`, data)
    return res.data
};

export const checkout = async (data) => {
    const res = await  axios.post(`${process.env.REACT_APP_API_URL}/cart/checkout`, data)
    return res.data
};