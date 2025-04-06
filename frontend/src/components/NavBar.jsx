import React from "react";
import { SiDocsdotrs } from "react-icons/si";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();
  return (
    <nav className="w-full h-24 p-7 shadow-lg shadow-purple-300 flex justify-between items-center bg-indigo-950 px-10">
      <div className="flex items-center ml-68">
        <SiDocsdotrs className="text-white text-4xl" />
        <h1 className="text-4xl w-full text-center font-extrabold m-5 bg-gradient-to-r from-pink-400 to-blue-400 text-transparent bg-clip-text">
          Document Forgery Detection System
        </h1>
      </div>
      <ul className="flex gap-6 text-white">
        <li onClick={() => navigate("/")} className="hover:text-gray-300 cursor-pointer border border-blue-950 p-2 bg-blue-950 rounded">Home</li>
        <li
        onClick={() => navigate("/add-genuine")}
        className="hover:text-gray-300 cursor-pointer border border-blue-950 p-2 bg-blue-950 rounded"
        >Add Genuine Document</li>
      </ul>
    </nav>
  );
};

export default NavBar;
