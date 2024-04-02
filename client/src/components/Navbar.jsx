import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [token, setToken] = useState(false);
  return (
    <>
      <div className=" fixed w-full h-14  flex justify-between items-center shadow-lg bg-gray-300 p-8">
        <div className=" flex justify-around items-center gap-2">
          <img
            className="w-10 h-10 rounded"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNdPPnikBKLayDff2sSTNhbBUXAr4kucJ9i_RAQ9-mww&s"
            alt="pth"
          />
          <h1 className="flex gap-2">
            <span className="text-red-600 font-bold shadow-lg">
              CM & GOVERNOR
            </span>
            <span className="font-bold text-white shadow-lg">OF</span>{" "}
            <span className="text-green-600 font-bold shadow-lg">INDIA</span>
          </h1>
        </div>
        <div className="text-lg font-bold">Hello user</div>
        <div className="flex gap-2">
          {token ? (
            <>
              {" "}
              <button
                className=" text-yellow-50 bg-red-700 w-16 h-10 rounded shadow-lg hover:bg-red-500"
                type="submit"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <button
                className=" text-yellow-50 bg-blue-700 w-16 h-10 rounded shadow-lg hover:bg-blue-500"
                type="submit"
              >
                <Link to="/signup">SignUp</Link>
              </button>

              <button
                className=" text-yellow-50 bg-blue-700 w-16 h-10 rounded shadow-lg hover:bg-blue-500"
                type="submit"
              >
                <Link to="/login">Login</Link>
              </button>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
