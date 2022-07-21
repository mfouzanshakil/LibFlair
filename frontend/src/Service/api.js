import axios from "axios";

const url = "http://localhost:5000";

export const addUser = async (userData) => {
  return await axios.post(`${url}/Signup`, userData);
};

export const getUser = async (userData) => {
  return await axios.get(`${url}/Login`, userData);
};
