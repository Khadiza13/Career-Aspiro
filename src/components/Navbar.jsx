import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const links = (
    <>
      <li>
        <NavLink
          className={({ isActive }) =>
            `text-lg font-bold ${isActive ? "bg-[#5238e2] text-white" : ""}`
          }
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            `text-lg font-bold ${isActive ? "bg-[#5238e2] text-white" : ""}`
          }
          to="/profile"
        >
          My Profile
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            `text-lg font-bold ${isActive ? "bg-[#5238e2] text-white" : ""}`
          }
          to="/event"
        >
          Event
        </NavLink>
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <div className="flex gap-1">
            <img
              className="w-12 h-9 bg-transparent"
              src="https://i.ibb.co.com/hXykW23/bg.png"
              alt=""
            />
            <a className=" text-3xl text-blue-900 font-bold">ASPIRO</a>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        {/* <div className="navbar-end">
          <div className="w-10 rounded-full mr-2">
            <img
              className="rounded-full"
              src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
            />
          </div>

          <Link to="/auth/login" className="btn ">
            Login
          </Link>
        </div> */}
        <div className="navbar-end flex items-center">
          {user ? (
            <div className="flex items-center gap-2">
              <div className="relative group">
                {/* User Image */}
                <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-blue-500 cursor-pointer">
                  <img
                    src={user.photoURL}
                    alt="User"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Tooltip on Hover */}
                <div className="absolute top-12 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-sm py-1 px-3 rounded opacity-0 group-hover:opacity-100 transition duration-300">
                  {user.displayName || "User"}
                </div>
              </div>
              <button onClick={logout} className="btn">
                LogOut
              </button>
            </div>
          ) : (
            // Login Button if No User
            <Link to="/auth/login" className="btn">
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
