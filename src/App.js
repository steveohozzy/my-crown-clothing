import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";

// old import if looking at useState
//import { createContext, useState, useEffect, useReducer } from "react"

import { checkUserSession } from "./store/user/userAction";
import Navigation from "./components/navigation/Navigation";
import Authentication from "./routes/authentication/Authentication";
import Home from "./routes/home/Home";
import Shop from "./routes/shop/Shop";
import Checkout from "./routes/checkout/Checkout";
import { useDispatch } from "react-redux";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession());
  }, [dispatch])

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="/shop/*" element={<Shop />} />
        <Route path="/auth" element={<Authentication />} />
        <Route path="/checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
}

export default App;
