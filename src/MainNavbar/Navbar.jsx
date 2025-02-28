import React, { useState } from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import Home from "../Components/Home";
import About from "../Components/About";
import Todo from "../Components/Todo";
import Register from "../Components/Form/Register";
import Login from "../Components/Form/Login";
import Dashboard from "../Components/Form/Dashboard";
import Weather from "../Components/Weather";
import Task from "../Components/Task";
import Protected from "../Components/Protected";

const Navbar = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLoginSuccess = () => {
    setIsAuthenticated(true);
  };

  return (
    <div>
      <div className="bg-blue-500 fixed top-0 left-0 w-full h-[6vh] flex items-center px-6 text-lg font-bold shadow-lg z-50">
        <p className="text-2xl text-white">🌍 Website</p>
        <ul className="flex space-x-6 ml-auto">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-yellow-300 font-bold transition duration-300"
                  : "text-white hover:text-yellow-300 transition duration-300"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "text-yellow-300 font-bold transition duration-300"
                  : "text-white hover:text-yellow-300 transition duration-300"
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/todo"
              className={({ isActive }) =>
                isActive
                  ? "text-yellow-300 font-bold transition duration-300"
                  : "text-white hover:text-yellow-300 transition duration-300"
              }
            >
              Todo
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/login"
              className={({ isActive }) =>
                isActive
                  ? "text-yellow-300 font-bold transition duration-300"
                  : "text-white hover:text-yellow-300 transition duration-300"
              }
            >
              Login
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/weather"
              className={({ isActive }) =>
                isActive
                  ? "text-yellow-300 font-bold transition duration-300"
                  : "text-white hover:text-yellow-300 transition duration-300"
              }
            >
              Weather
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/task"
              className={({ isActive }) =>
                isActive
                  ? "text-yellow-300 font-bold transition duration-300"
                  : "text-white hover:text-yellow-300 transition duration-300"
              }
            >
              Task
            </NavLink>
          </li>
        </ul>
      </div>

      <div className="pt-[6vh]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/login"
            element={<Login onLoginSuccess={handleLoginSuccess} />}
          />
          <Route
            path="/dashboard"
            element={
              <Protected
                element={Dashboard}
                isAuthenticated={isAuthenticated}
              />
            }
          />
          <Route
            path="/weather"
            element={
              <Protected element={Weather} isAuthenticated={isAuthenticated} />
            }
          />

          <Route
            path="/task"
            element={
              <Protected element={Task} isAuthenticated={isAuthenticated} />
            }
          />

          <Route
            path="/about"
            element={
              <Protected element={About} isAuthenticated={isAuthenticated} />
            }
          />

          <Route
            path="/todo"
            element={
              <Protected element={Todo} isAuthenticated={isAuthenticated} />
            }
          />
        </Routes>
      </div>
    </div>
  );
};

export default Navbar;
