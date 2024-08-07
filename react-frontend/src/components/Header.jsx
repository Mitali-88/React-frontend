// src/components/Navbar.js

import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";

export const Navbar = () => {
    return (
        <nav className="bg-white w-full px-3 sticky top-0 z-50 shadow-md">
           <div className="flex items-center h-24 justify-between p-1 mx-auto">
            {/* Logo */}
            <div className="flex-shrink-0 ml-12">
                <Link to="/">
                    <img
                        src={logo}
                        alt="Logo"
                        className="w-24 h-24 object-contain"
                    />
                </Link>
            </div>

            {/* Navigation Items */}
            <div className="flex space-x-20  ml-auto mr-20">
                <Link to="/about" className="text-gray-800 text-2xl font-bold hover:text-gray-600">About</Link>
                <Link to="/gallery" className="text-gray-800 text-2xl font-bold hover:text-gray-600">Gallery</Link>
                <Link to="/reviews" className="text-gray-800 text-2xl font-bold hover:text-gray-600">Reviews</Link>
                <Link to="/contact" className="text-gray-800 text-2xl font-bold hover:text-gray-600">Contact</Link>
                <Link to="/admin" className="text-gray-800 text-2xl font-bold hover:text-gray-600">Admin</Link>
            </div>
        </div>
        </nav>
    );
};
