import { Route, Routes } from "react-router-dom";
import "./App.css";
import Appointment from "./pages/Services/Services";
import Home from "./pages/Home/Home";
import Login from "./pages/LoginSignup/Login";
import SignUp from "./pages/LoginSignup/SignUp";
import Footer from "./pages/Shared/Footer/Footer";
import NavBar from "./pages/Shared/Header/NavBar";
import NotFound from "./pages/Shared/NotFound/NotFound";

function App() {
  return (
    <div className="">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
