import axios from "axios";
import { useMutation, useQuery, useQueryClient } from "react-query";

const addProduct = (data) => {
  return axios.post("http://localhost:5050/AddProduct", data);
};

const productdeleter = (data) => {
  return axios.post("http://localhost:5050/deleteProducts", data);
};

const updateProduct = (data) => {
  return axios.post("http://localhost:5050/updateProductName", data);
};

const toggleStatus = (data) => {
  return axios.post("http://localhost:5050/toggleProduct", data);
};

const foodProductsFetcher = () => {
  return axios.get("http://localhost:5050/getAllProducts");
};

export const useAddProduct = (prodData) => {
  console.log(prodData);
  const queryClient = useQueryClient();
  return useMutation(addProduct, {
    onSuccess: (data) => {
      console.log(data);
      queryClient.setQueryData("Food-Data", (oldData) => {
        console.log(oldData);
        return {
          ...oldData,
          data: [...oldData.data, data.data],
        };
      });
    },
  });
};

export const useDeleteProduct = () => {
  const queryClient = useQueryClient();
  return useMutation(productdeleter, {
    onSuccess: (data) => {
      queryClient.setQueryData("Food-Data", (oldData) => {
        const newData = oldData.data.filter((item) => item._id !== data.data);
        return {
          ...oldData,
          data: newData,
        };
      });
    },
  });
};

export const useUpdateProduct = () => {
  const queryClient = useQueryClient();
  return useMutation(updateProduct, {
    onSuccess: (data) => {
      queryClient.setQueryData("Food-Data", (oldData) => {
        const newinstance = oldData.data;
        const newid = oldData.data.findIndex(
          (item) => item._id === data.data.id
        );
        newinstance[newid].name = data.data.prodName;
        return {
          ...oldData,
          data: newinstance,
        };
      });
    },
  });
};

export const useToggleProduct = () => {
  const queryClient = useQueryClient();
  return useMutation(toggleStatus, {
    onSuccess: (data) => {
      queryClient.setQueryData("Food-Data", (oldData) => {
        console.log(oldData.data);
        const newlist = oldData.data.map((item) => {
            if(item._id === data.data){
                const updatedList = {
                    ...item,
                    status: !item.status
                };
                return updatedList;
            }
            return item;
        });
        return {
            ...oldData,
            data: newlist
        }
      });
    },
  });
};

export const useFetchAllFood = () => {
  return useQuery("Food-Data", foodProductsFetcher);
  
}
