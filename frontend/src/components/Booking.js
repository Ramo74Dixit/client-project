import React, { useState, useEffect } from "react";
import HeroImage from "./HeroImage";
import Footer from "./Footer";

function Booking() {
  const [formData, setFormData] = useState({
    date: "",
    time: "",
    photographerName: "",
    email: "",
    phone: "",
    shootingPlace: "",
    shootingLocation: "",
    meetingPoint: "",
    shootingConcept: "",
    clothingType: "",
    shoesType: "",
    itemsType: "",
    makeupType: "",
    others: "",
  });

  const [availableDates, setAvailableDates] = useState([]);
  const [availableTimes, setAvailableTimes] = useState([]);
  const [availabilityData, setAvailabilityData] = useState([]);

  useEffect(() => {
    const fetchAvailability = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          alert("You must be logged in to view availability.");
          return;
        }

        const response = await fetch(
          "https://client-project-ten.vercel.app/api/booking/availability",
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (response.ok) {
          const data = await response.json();
          setAvailabilityData(data);
          const dates = Array.from(new Set(data.map((item) => item.date)));
          setAvailableDates(dates);
        } else {
          console.error("Failed to fetch availability data.");
        }
      } catch (error) {
        console.error("Error fetching availability:", error);
      }
    };

    fetchAvailability();
  }, []);

  useEffect(() => {
    if (formData.date) {
      const times = availabilityData
        .filter((item) => item.date === formData.date)
        .map((item) => ({ time: item.time }));
      setAvailableTimes(times);
    } else {
      setAvailableTimes([]);
    }
  }, [formData.date, availabilityData]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        alert("You must be logged in to submit a booking.");
        return;
      }

      const response = await fetch("https://client-project-ten.vercel.app/api/booking", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Booking request submitted successfully!");
        setFormData({
          date: "",
          time: "",
          photographerName: "",
          email: "",
          phone: "",
          shootingPlace: "",
          shootingLocation: "",
          meetingPoint: "",
          shootingConcept: "",
          clothingType: "",
          shoesType: "",
          itemsType: "",
          makeupType: "",
          others: "",
        });
      } else {
        alert("Failed to submit booking request.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div className="h-screen flex flex-col mt-[60px] md:mt-0 relative z-10">
      <div className="flex flex-grow">
        <div className="w-full h-auto mt-3 flex">
          <div className="md:w-[39vw] w-full mt-0 items-center justify-center">
            <div className="sm:items-center sm:w-full sm:p-15 relative min-h-screen flex items-center justify-center bg-[white] p-6">
              <div className="w-full max-w-lg bg-white shadow-md p-6">
                <h3 className="nunito-prof !font-semibold pb-4 text-xl text-gray-800 text-center">Book Model</h3>
                <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <label className="w-full sm:w-48 font-medium text-gray-700" htmlFor="date">Select Date*</label>
                    <select
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      className="input-field border border-gray-500 p-2 shadow-sm"
                      required
                    >
                      <option value="">Select a date</option>
                      {availableDates.map((date, index) => (
                        <option key={index} value={date}>
                          {date}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <label className="w-full sm:w-48 font-medium text-gray-700" htmlFor="time">Select Time*</label>
                    <select
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      className="input-field border border-gray-500 p-2 shadow-sm"
                      required
                      disabled={!formData.date}
                    >
                      <option value="">Select a time</option>
                      {availableTimes.map((slot, index) => (
                        <option key={index} value={slot.time}>
                          {slot.time}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <label className="w-full sm:w-48 font-medium text-gray-700" htmlFor="photographerName">Photographer Name</label>
                    <input
                      type="text"
                      name="photographerName"
                      value={formData.photographerName}
                      onChange={handleChange}
                      className="input-field border border-gray-500 p-2 shadow-sm"
                    />
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <label className="w-full sm:w-48 font-medium text-gray-700" htmlFor="email">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="input-field border border-gray-500 p-2 shadow-sm"
                    />
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <label className="w-full sm:w-48 font-medium text-gray-700" htmlFor="phone">Phone Number</label>
                    <input
                      type="number"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="input-field border border-gray-500 p-2 shadow-sm"
                    />
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <label className="w-full sm:w-48 font-medium text-gray-700" htmlFor="shootingPlace">Shooting Place*</label>
                    <input
                      type="text"
                      name="shootingPlace"
                      value={formData.shootingPlace}
                      onChange={handleChange}
                      className="input-field border border-gray-500 p-2 shadow-sm"
                      required
                    />
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <label className="w-full sm:w-48 font-medium text-gray-700" htmlFor="shootingLocation">Shooting Location*</label>
                    <input
                      type="text"
                      name="shootingLocation"
                      value={formData.shootingLocation}
                      onChange={handleChange}
                      className="input-field border border-gray-500 p-2 shadow-sm"
                      required
                    />
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <label className="w-full sm:w-48 font-medium text-gray-700" htmlFor="meetingPoint">Meeting Point*</label>
                    <input
                      type="text"
                      name="meetingPoint"
                      value={formData.meetingPoint}
                      onChange={handleChange}
                      className="input-field border border-gray-500 p-2 shadow-sm"
                      required
                    />
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <label className="w-full sm:w-48 font-medium text-gray-700" htmlFor="shootingConcept">Shooting Concept</label>
                    <input
                      type="text"
                      name="shootingConcept"
                      value={formData.shootingConcept}
                      onChange={handleChange}
                      className="input-field border border-gray-500 p-2 shadow-sm"
                    />
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <label className="w-full sm:w-48 font-medium text-gray-700" htmlFor="clothingType">Clothing Type</label>
                    <input
                      type="text"
                      name="clothingType"
                      value={formData.clothingType}
                      onChange={handleChange}
                      className="input-field border border-gray-500 p-2 shadow-sm"
                    />
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <label className="w-full sm:w-48 font-medium text-gray-700" htmlFor="shoesType">Shoes Type</label>
                    <input
                      type="text"
                      name="shoesType"
                      value={formData.shoesType}
                      onChange={handleChange}
                      className="input-field border border-gray-500 p-2 shadow-sm"
                    />
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <label className="w-full sm:w-48 font-medium text-gray-700" htmlFor="itemsType">Items Type</label>
                    <input
                      type="text"
                      name="itemsType"
                      value={formData.itemsType}
                      onChange={handleChange}
                      className="input-field border border-gray-500 p-2 shadow-sm"
                    />
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <label className="w-full sm:w-48 font-medium text-gray-700" htmlFor="makeupType">Makeup Type</label>
                    <input
                      type="text"
                      name="makeupType"
                      value={formData.makeupType}
                      onChange={handleChange}
                      className="input-field border border-gray-500 p-2 shadow-sm"
                    />
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <label className="w-full sm:w-48 font-medium text-gray-700" htmlFor="others">Others</label>
                    <input
                      type="text"
                      name="others"
                      value={formData.others}
                      onChange={handleChange}
                      className="input-field border border-gray-500 p-2 shadow-sm"
                    />
                  </div>
                  <button type="submit" className="submit-btn bg-cyan-950 text-white w-full sm:w-[100px] py-2 hover:bg-cyan-800 transition">Submit</button>
                </form>
              </div>
            </div>
          </div>
          <div className="hidden sm:block md:bg-white md:w-[60vw] md:h-full md:bg-cover md:overflow-hidden p-4">
            <HeroImage className="md:w-full md:h-full md:p-10 md:object-cover" />
          </div>
        </div>
        <div className="md:w-[10%] md:ml-auto md:bg-[#F7D9C4]"></div>
      </div>
      <div className="mt-3">
        <Footer />
      </div>
    </div>
  );
}

export default Booking;
