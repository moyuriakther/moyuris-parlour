import { Route, Routes } from "react-router-dom";
import "./App.css";
import Appointment from "./pages/allServices/AllServices";
import ServiceBooking from "./pages/allServices/ServiceBooking";
import Dashboard from "./pages/Dashboard/Dashboard";
import Book from "./pages/Dashboard/UserDashboard/Book";
import BookingList from "./pages/Dashboard/UserDashboard/BookingList";
import Review from "./pages/Dashboard/UserDashboard/Review";
import Home from "./pages/Home/Home";
import Login from "./pages/LoginSignup/Login";
import RequireAuth from "./pages/LoginSignup/RequireAuth";
import SignUp from "./pages/LoginSignup/SignUp";
import Footer from "./pages/Shared/Footer/Footer";
import NavBar from "./pages/Shared/Header/NavBar";
import Profile from "./pages/Shared/Header/Profile";
import NotFound from "./pages/Shared/NotFound/NotFound";

function App() {
  return (
    <div className="">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/services" element={<Appointment />} />
        <Route path="/service/:id" element={<ServiceBooking />} />
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        >
          <Route index element={<Book />} />
          <Route path="bookings" element={<BookingList />} />
          <Route path="review" element={<Review />} />
        </Route>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
