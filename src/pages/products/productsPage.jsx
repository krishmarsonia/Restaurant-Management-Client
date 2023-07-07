import React from "react";
import BasicTable from "../../components/table/table";



const ProductsPage = () => {
  // const prodContext = useContext(ProductContext);
  // console.log(prodContext.productData);
  const headerArray = [
    {
      key: 1,
      name: "Product Name",
      align: "left",
    },
    {
      key: 2,
      name: "Status",
      align: "left",
    },
    {
      key: 3,
      name: "Operations",
      align: "left",
    },
  ];
  return (
    <div>
      
        <BasicTable
          headdata={headerArray}
          // contentData={prodContext.productData}
        />
        {/* <BasicModal /> */}
    </div>
  );
};

export default ProductsPage;
