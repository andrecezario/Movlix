import Axios from "axios";
import { error, response } from "./treatment";

const axios = Axios.create({
  baseURL: process.env.REACT_API_MOVIES,
});

const get = async (endpoint, config = {}) => {
  console.log(process.env.REACT_API_MOVIES,endpoint)
    return await axios.get(endpoint, config)
    .then(res => (response(res)))
    .catch(err => error(err))
  };
  
  const post = async (endpoint, data, config = {}) => {
    return await axios.post(endpoint, data, config)
      .then(res => (response(res)))
      .catch(err => error(err))
  };
  
export { axios, get, post };