import { Route, Routes } from "react-router-dom";
import "./App.css";
import Appointment from "./pages/allServices/AllServices";
import ServiceBooking from "./pages/allServices/ServiceBooking";
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
        <Route path="/services" element={<Appointment />} />
        <Route path="/service/:name" element={<ServiceBooking />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
