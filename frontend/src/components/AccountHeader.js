import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AccountHeader = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleLogout = async () => {
    // Optional: Notify the server of the logout
    const token = localStorage.getItem("token");
    if (token) {
      try {
        await fetch("http://localhost:5000/api/logout", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });
      } catch (error) {
        console.error("Logout failed:", error);
      }
    }

    // Clear JWT token and user info from localStorage or sessionStorage
    localStorage.removeItem("token"); // or sessionStorage.removeItem("token");
    localStorage.removeItem("user");

    // Redirect to login page
    navigate("/login");
  };

  const handleCalendarClick = () => {
    // Redirect to calendar page
    navigate("/calendar");
  };

  return (
    <header className="bg-white shadow-md w-full">
      <div className="flex justify-between items-center p-4">
        <div className="flex items-center">
          <img src="/accountlogo.png" alt="Logo" className="h-10 w-10" />
        </div>
        <div className="flex items-center space-x-4">
          <button
            onClick={handleCalendarClick}
            className="text-gray-600 hover:text-gray-900"
          >
            <img src="/cal.svg" alt="Calendar" className="h-6 w-6" />
          </button>
          <button className="text-gray-600 hover:text-gray-900">
            <img src="/settings.svg" alt="Settings" className="h-6 w-6" />
          </button>
          <div className="relative">
            <button
              onClick={toggleDropdown}
              className="flex items-center text-gray-600 hover:text-gray-900 focus:outline-none"
            >
              <img src="/woman.png" alt="Profile" className="h-8 w-8 rounded-full" />
            </button>

            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-32 bg-white rounded-lg shadow-lg">
                <button
                  onClick={handleLogout}
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100 w-full text-left"
                >
                  Logout
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="inline-block h-5 w-5 ml-2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a2 2 0 01-2 2h-4a2 2 0 01-2-2V5a2 2 0 012-2h4a2 2 0 012 2v1"
                    />
                  </svg>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default AccountHeader;
