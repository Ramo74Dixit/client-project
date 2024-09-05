import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import AccountHeader from "./AccountHeader";

const ChangePassword = () => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate(); // Initialize navigate function

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      setMessage("New passwords do not match");
      return;
    }

    const token = localStorage.getItem("token"); // Retrieve JWT token

    if (!token) {
      setMessage("User is not authenticated");
      return;
    }

    const response = await fetch("https://client-project-ten.vercel.app/api/login/api/change-password", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`, // Attach JWT token with Bearer scheme
      },
      body: JSON.stringify({ currentPassword, newPassword }),
    });

    const data = await response.text(); // Capture response message

    if (response.status === 200) {
      setMessage("Password changed successfully");
      setTimeout(() => navigate("/"), 2000); // Redirect to home page after 2 seconds
    } else {
      setMessage(data || "Error changing password");
    }
  };

  return (
    <div>
      <AccountHeader />
      <div className="flex justify-center items-center min-h-screen w-[100vw] bg-gray-100">
        <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
          <h2 className="text-xl font-semibold mb-6 text-center">Change Password</h2>
          {message && <p className="text-center text-red-500">{message}</p>}
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700">Current Password</label>
              <input
                type="password"
                className="w-full mt-2 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">New Password</label>
              <input
                type="password"
                className="w-full mt-2 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                required
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700">Confirm New Password</label>
              <input
                type="password"
                className="w-full mt-2 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
            >
              Change Password
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;
