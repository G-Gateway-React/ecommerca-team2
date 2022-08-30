import { Route, Routes } from "react-router-dom";
import "./App.css";
import Hero from "./Components/Hero/hero";
import Navbar from "./Components/NavBar/Navbar";
import Home from "./screens/Home/Home";
import { Login } from "./screens/Login/Login";
import { SignUp } from "./screens/Suinup/SuinUp";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
