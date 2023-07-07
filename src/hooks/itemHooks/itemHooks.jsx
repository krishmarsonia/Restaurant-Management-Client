import axios from "axios";
import { useQueryClient, useMutation } from "react-query";

const addItem = (data) => {
  return axios.post("http://localhost:5050/addItem", data);
};

const itemToggleStatus = (data) => {
  return axios.post("http://localhost:5050/itemStatusChange", data);
};

const deleteItem = (data) => {
  return axios.post("http://localhost:5050/deleteItem", data);
}



export const useAddItem = () => {
  const queryClient = useQueryClient();
  return useMutation(addItem, {
    onSuccess: (data) => {
      queryClient.setQueryData("Food-Data", (oldData) => {
        // console.log(data.data);
        const newDataInstane = oldData.data;
        const newDataId = newDataInstane.findIndex(
          (item) => item._id === data.data._id
        );
        const newArray = newDataInstane[newDataId].items;
        const newerArray = [...newArray, data.data.dataArray];
        newDataInstane[newDataId].items = newerArray;
        // console.log(newDataInstane);
        return { data: newDataInstane };
      });
    },
  });
};

export const useItemToggleChange = () => {
  const queryClient = useQueryClient();
  return useMutation(itemToggleStatus, {
    onSuccess: (data) => {
      queryClient.setQueryData("Food-Data", (oldData) => {
        const newDataInstance = oldData.data;
        const newDataId = newDataInstance.findIndex(
          (item) => item._id === data.data.prodId
          );
          const newArray = newDataInstance[newDataId].items;
          const newItemArray = newArray.findIndex(
            (itemes) => itemes._id === data.data.itemId
            );
        newArray[newItemArray].status = data.data.status;
        newDataInstance[newDataId].items = newArray;
        return { data: newDataInstance };
      });
    },
  });
};
export const useDeleteItem = () => {
  const queryClient = useQueryClient();
  return useMutation(deleteItem, {
    onSuccess: (data) => {
      queryClient.setQueryData("Food-Data", (oldData) => {
        const newDataInstance = oldData.data;
        const newDataId = newDataInstance.findIndex(
          (item) => item._id === data.data.prodId
        );
        const newArray = newDataInstance[newDataId].items;
        const newerArray = newArray.filter((itemes) => itemes._id !== data.data.itemId);
        newDataInstance[newDataId].items = newerArray;
        return {data: newDataInstance};
      })
    }
  })
}
