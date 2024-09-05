// import { useState } from "react";
// import { Link } from "react-router-dom";
// import { FaBars, FaTimes } from "react-icons/fa";

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <div className="h-24 flex">
//     {/* Left Half */}
//     <div className="bg-[#F7D9C4] w-full md:w-[42%] md:bg-white"></div>
  
//     {/* Right Half */}
//     <div className="w-full md:w-[58%] bg-[#F7D9C4] md:bg-[#F7D9C4] flex items-center justify-end p-12">
//       <div className="hidden md:flex space-x-4">
//         <Link to="/" className="text-gray-600 hover:text-black">Home</Link>
//         <Link to="/profile" className="text-gray-600 hover:text-black">Profile</Link>
//         <Link to="/gallery" className="text-gray-600 hover:text-black">Gallery</Link>
//         <Link to="/booking" className="text-gray-600 hover:text-black">Booking</Link>
//         <Link to="/login" className="text-gray-600 hover:text-black">Login</Link>
//       </div>
  
//       {/* Hamburger Icon */}
//       <div className="md:hidden">
//         <button onClick={toggleMenu}>
//           {isOpen ? <FaTimes className="text-gray-600" /> : <FaBars className="text-gray-600" />}
//         </button>
//       </div>
  
//       {/* Mobile Menu */}
//       {isOpen && (
//         <div className="absolute top-24 right-0 bg-red-500 p-6 rounded-lg shadow-lg md:hidden">
//           <Link
//             to="/"
//             className="block text-gray-600 hover:text-black mb-4"
//             onClick={toggleMenu}
//           >
//             Home
//           </Link>
//           <Link
//             to="/profile"
//             className="block text-gray-600 hover:text-black mb-4"
//             onClick={toggleMenu}
//           >
//             Profile
//           </Link>
//           <Link
//             to="/gallery"
//             className="block text-gray-600 hover:text-black mb-4"
//             onClick={toggleMenu}
//           >
//             Gallery
//           </Link>
//           <Link
//             to="/booking"
//             className="block text-gray-600 hover:text-black mb-4"
//             onClick={toggleMenu}
//           >
//             Booking
//           </Link>
//           <Link
//             to="/login"
//             className="block text-gray-600 hover:text-black"
//             onClick={toggleMenu}
//           >
//             Login
//           </Link>
//         </div>
//       )}
//     </div>
//   </div>
  
//   );
// }
import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaArrowLeft } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="h-24 flex relative z-50">
      {/* Left Half */}
      <div className="bg-[#918f88] w-full md:w-[42%] md:bg-white"></div>

      {/* Right Half */}
      <div className="w-full md:w-[58%] bg-[#918f88] md:bg-[#F7D9C4] flex items-center justify-end p-12 relative">
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-4">
          <Link to="/" className="text-gray-600 hover:text-black">Home</Link>
          <Link to="/profile" className="text-gray-600 hover:text-black">Profile</Link>
          <Link to="/gallery" className="text-gray-600 hover:text-black">Gallery</Link>
          <Link to="/booking" className="text-gray-600 hover:text-black">Booking</Link>
          <Link to="/login" className="text-gray-600 hover:text-black">Login</Link>
        </div>

        {/* Hamburger Menu Button */}
        {!isOpen && (
          <div
            className='absolute top-5 md:hidden z-50 cursor-pointer'
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            <FaBars size={30} color="#333333" />
          </div>
        )}

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-0 right-0 h-[100vh] w-[40vw] max-w-xs bg-white p-6 shadow-lg md:hidden flex flex-col items-center justify-center">
            {/* Back Arrow Button */}
            <div
              className="absolute top-6 left-6 cursor-pointer"
              onClick={toggleMenu}
              aria-label="Close Menu"
            >
              <FaArrowLeft size={30} color="#333333" />
            </div>
            <div className="flex flex-col space-y-4">
              <Link
                to="/"
                className="text-gray-600 hover:text-black text-lg"
                onClick={toggleMenu}
              >
                Home
              </Link>
              <Link
                to="/profile"
                className="text-gray-600 hover:text-black text-lg"
                onClick={toggleMenu}
              >
                Profile
              </Link>
              <Link
                to="/gallery"
                className="text-gray-600 hover:text-black text-lg"
                onClick={toggleMenu}
              >
                Gallery
              </Link>
              <Link
                to="/booking"
                className="text-gray-600 hover:text-black text-lg"
                onClick={toggleMenu}
              >
                Booking
              </Link>
              <Link
                to="/login"
                className="text-gray-600 hover:text-black text-lg"
                onClick={toggleMenu}
              >
                Login
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
