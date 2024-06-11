import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.scss";
import Home from "./components/page/home/Home";
import Brand from "./components/page/brand/Brand";
import SignIn from "./components/page/auth/SignIn";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/brand" element={<Brand />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
