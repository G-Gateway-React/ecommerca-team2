import { Card } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import "./App.css";

import Footer from "./Components/Footer";
import Hero from "./Components/Hero/hero";
import Navbar from "./Components/NavBar/Navbar";

import Bag from "./screens/Bag/Bag";

import Home from "./screens/Home/Home";
import { Login } from "./screens/Login/Login";
import { Product } from "./screens/Product/Product";
import { RedirectPage } from "./screens/RedirectPage/RedirectPage";
import { SignUp } from "./screens/Suinup/SuinUp";
function App() {

  return (
    <div>
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/product" element={<Product />} />
        <Route path="/bag" element={<Bag />} />
        <Route path="*" element={<RedirectPage />} />
      </Routes>
    </div>
  );
}

export default App;
