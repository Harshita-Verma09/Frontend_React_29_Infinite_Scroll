import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header className="bg-blue-600 text-white p-4 shadow-md">
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo / Title */}
                <h1 className="text-2xl font-bold">News App</h1>

                {/* Navigation Menu */}
                <nav>
                    <ul className="flex space-x-6">
                        <li>
                            <Link to="/" className="hover:underline hover:text-gray-200">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/about" className="hover:underline hover:text-gray-200">
                                About
                            </Link>
                        </li>
                        
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
