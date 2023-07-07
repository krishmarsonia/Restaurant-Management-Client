import React from "react";
import { Box, Grid } from "@mui/material";
import { Route, Routes } from "react-router-dom";

import LeftMenu from "./components/leftMenu/leftMenu";
import ProductsPage from "./pages/products/productsPage";
import SelectState from "./context/selectContext/selectState";
import RightScreen from "./components/rightScreen/rightScreen";
import ProductState from "./context/productsContext/productState";

import "./App.css";
import FoodItems from "./pages/foodItems/foodItems";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import TestPage from "./pages/testPage/testPage";
import ItemState from "./context/itemsContext/itemState";
import OrderPage from "./pages/orderPage/orderPage";
import OrderState from "./context/orderContext/orderState";
import TablePage from "./pages/tablePage/tablePage";
import OrderReview from "./pages/orderReviewPage/orderReview";

// import MainPage from "./pages/main/main";

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <OrderState>
        <ItemState>
          <ProductState>
            <SelectState>
              <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                  <Grid item xs={2}>
                    <LeftMenu />
                  </Grid>
                  <Grid item xs={10}>
                    <Routes>
                      <Route exact path="/" element={<RightScreen />} />
                      <Route path="/products" element={<ProductsPage />} />
                      <Route path="/items" element={<FoodItems />} />
                      <Route path="/order" element={<OrderPage />} />
                      <Route path="/tables" element={<TablePage />} />
                      <Route path="/orderReview" element={<OrderReview />} />
                      <Route path="/test" element={<TestPage />} />
                    </Routes>
                    {/* <RightScreen /> */}
                  </Grid>
                </Grid>
              </Box>
            </SelectState>
          </ProductState>
        </ItemState>
        </OrderState>
      </div>
      <ReactQueryDevtools initialIsOpen={false} position={"bottom-left"} />
    </QueryClientProvider>
  );
}

export default App;
