import React from "react";
import ReactDOM from "react-dom/client";
import store from "./Redux/Store/store";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";

import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

// import App from "./App";
import Header from "./component/Header";
import ProductList from "./route/ProductList/ProductList";
import PriceList from "./route/PriceList/PriceList";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <Header />
        {/* <App /> */}
        <Routes>
          <Route path="/products" element={<ProductList />} />
          <Route path="/price" element={<PriceList />} />
        </Routes>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
