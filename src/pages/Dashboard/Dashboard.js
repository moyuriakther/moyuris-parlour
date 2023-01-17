import React from "react";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  // const { query } = useLocation();
  // console.log(query);
  return (
    <div className="container mx-auto">
      <div className="drawer drawer-mobile">
        <input id="my-dashboard" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <Outlet />
        </div>
        <div className="drawer-side">
          <label htmlFor="my-dashboard" className="drawer-overlay"></label>
          <ul className="menu w-56 bg-base-100 text-base-content">
            {/* <!-- Sidebar content here --> */}
            <li>
              <Link to="/dashboard">Book</Link>
            </li>
            <li>
              <Link to="/dashboard/bookings">Booking List</Link>
            </li>
            <li>
              <Link to="/dashboard/review">Review</Link>
            </li>
            {/* {admin && (
            <>
              <li>
                <Link to="/dashboard/users">All Users</Link>
              </li>
              <li>
                <Link to="/dashboard/addDoctor">Add Doctors</Link>
              </li>
              <li>
                <Link to="/dashboard/manageDoctor">Manage Doctors</Link>
              </li>
            </>
          )} */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
