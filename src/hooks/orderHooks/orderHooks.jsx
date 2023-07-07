import axios from "axios";
import { useMutation, useQuery } from "react-query";

const postOrder = (data) => {
  return axios.post("http://localhost:5050/newOrder", data);
};

export const fetchOrder = (data) => {
  return axios.get(`http://localhost:5050/getAllOrders/${data.queryKey[1]}`);
}

const fetchTables = () => {
  return axios.get("http://localhost:5050/getAllTables");
};

export const useAddOrder = () => {
  return useMutation(postOrder);
};

export const useFetchAllOrders = (data) => {
  return useQuery(["Orders", data], fetchOrder);
}

export const useFetchTables = () => {
  return useQuery("Tables", fetchTables);
};
