import React, { useState, useEffect } from "react";
import AccountHeader from "./components/AccountHeader";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
const AvailabilityManagement = () => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState({
    hours: "",
    minutes: "",
    period: "AM",
  });
  const [isDateValid, setIsDateValid] = useState(false);
  const [isTimeValid, setIsTimeValid] = useState(true);
  const [availableSlots, setAvailableSlots] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAvailableSlots = async () => {
      const token = localStorage.getItem("token");
      const userId = localStorage.getItem("userId");

      if (!token || !userId) {
        alert("You must be logged in to manage availability.");
        navigate("/login");
        return;
      }

      try {
        const response = await fetch("http://localhost:5000/api/availability", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.ok) {
          const slots = await response.json();
          setAvailableSlots(slots);
        } else {
          const errorData = await response.json();
          alert(`Error: ${errorData.message}`);
        }
      } catch (error) {
        console.error("Error fetching available slots:", error);
        alert("An error occurred while fetching available slots.");
      }
    };

    fetchAvailableSlots();
  }, [navigate]);

  const handleTimeChange = (e) => {
    setTime({ ...time, [e.target.name]: e.target.value });
  };

  const validateTime = () => {
    const currentDate = new Date();
    let currentHours = currentDate.getHours();
    let currentMinutes = currentDate.getMinutes();

    let selectedHours = parseInt(time.hours);
    if (time.period === "PM" && selectedHours !== 12) {
      selectedHours += 12;
    }
    if (time.period === "AM" && selectedHours === 12) {
      selectedHours = 0; // Handle 12 AM as 00 hours
    }
    const selectedMinutes = parseInt(time.minutes);

    if (
      selectedHours > currentHours ||
      (selectedHours === currentHours && selectedMinutes > currentMinutes)
    ) {
      setIsTimeValid(true);
    } else {
      setIsTimeValid(false);
      alert("The selected time cannot be in the past.");
    }
  };

  const handleAddAvailability = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        alert("You must be logged in to add availability.");
        navigate("/login");
        return;
      }

      const availabilityData = {
        date,
        time: `${time.hours}:${time.minutes} ${time.period}`,
      };

      const response = await fetch("http://localhost:5000/api/availability", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(availabilityData),
      });

      if (response.ok) {
        alert("Availability added successfully!");
        setDate("");
        setTime({ hours: "", minutes: "", period: "AM" });
      } else {
        const errorData = await response.json();
        alert(`Error: ${errorData.message}`);
      }
    } catch (error) {
      console.error("Error adding availability:", error);
      alert("An error occurred while adding availability.");
    }
  };

  return (
    <div className="w-full">
      <AccountHeader />
      <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-md mt-20">
        <h2 className="text-center text-lg font-semibold mb-4">
          Availability Management
        </h2>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Select Date</label>
          <input
            type="date"
            className="w-full p-2 border border-gray-300 rounded-md"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 mb-2">Select Time</label>
          <div className="flex space-x-2">
            <input
              type="number"
              name="hours"
              className="w-16 p-2 border border-gray-300 rounded-md"
              placeholder="0"
              value={time.hours}
              onChange={handleTimeChange}
              min="1"
              max="12"
            />
            <span className="self-center">:</span>
            <input
              type="number"
              name="minutes"
              className="w-16 p-2 border border-gray-300 rounded-md"
              placeholder="00"
              value={time.minutes}
              onChange={handleTimeChange}
              min="0"
              max="59"
            />
            <select
              name="period"
              className="p-2 border border-gray-300 rounded-md"
              value={time.period}
              onChange={handleTimeChange}
            >
              <option value="AM">AM</option>
              <option value="PM">PM</option>
            </select>
          </div>
        </div>

        <button
          className="w-full p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300"
          onClick={handleAddAvailability}
        >
          Add Availability
        </button>
      </div>
      <div className="flex justify-center mt-4">
        <Link
          className="w-full max-w-xs p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300 text-center"
          to="/booking"
        >
          Book Now
        </Link>
      </div>
    </div>
  );
};

export default AvailabilityManagement;
