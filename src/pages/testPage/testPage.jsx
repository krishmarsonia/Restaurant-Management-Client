import axios from "axios";
import React from "react";
import { useQuery } from "react-query";

const allFoodFetcher = () => {
    return axios.get("http://localhost:5050/getAllProducts");
}

const TestPage = () => {
    const {data} = useQuery('Food-Data', allFoodFetcher);
    console.log(data?.data);
  return <div>{
    
        <div>Heelo</div>
    
}</div>;
};

export default TestPage;
