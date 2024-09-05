// import React from 'react';

// const Footer = () => {
//   return (
//     <footer className="py-4">
//       <div className="max-w-6xl mx-auto px-4 ">
//         <div className="flex justify-start space-x-4">
//           <a href="#" className="hover:bg-pink-500">
//             <img src="/insta-svg.svg" alt="Instagram" className="h-6 w-6 filter hover:brightness-0 hover:invert" />
//           </a>
//           <a href="#" className="hover:bg-blue-600">
//             <img src="/facebook-svg.svg" alt="Facebook" className="h-6 w-6 filter hover:brightness-0 hover:invert" />
//           </a>
//           <a href="#" className="hover:bg-black">
//             <img src="/twitter-svg.svg" alt="Twitter" className="h-6 w-6 filter hover:brightness-0 hover:invert" />
//           </a>
//           <a href="#" className="hover:bg-slate-400">
//             <img src="/tiktok-svg.svg" alt="TikTok" className="h-6 w-6 filter hover:brightness-0 hover:invert" />
//           </a>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
import React from 'react';

const Footer = () => {
  return (
    <div className="bg-white p-4 flex items-center justify-between w-full sticky bottom-0">
      <div className="flex space-x-4">
        <a href="https://www.instagram.com/yourprofile" aria-label="Instagram">
          <img src="/insta-svg.svg" alt="Instagram" className="h-8 w-8 hover:opacity-75 transition-opacity" />
        </a>
        <a href="https://twitter.com/yourprofile" aria-label="Twitter">
          <img src="/twitter-svg.svg" alt="Twitter" className="h-8 w-8 hover:opacity-75 transition-opacity" />
        </a>
        <a href="https://www.facebook.com/yourprofile" aria-label="Facebook">
          <img src="/facebook-svg.svg" alt="Facebook" className="h-8 w-8 hover:opacity-75 transition-opacity" />
        </a>
        <a href="https://www.tiktok.com/@yourprofile" aria-label="Tiktok">
          <img src="/tiktok-svg.svg" alt="Tiktok" className="h-8 w-8 hover:opacity-75 transition-opacity" />
        </a>
      </div>
      <div className="text-gray-600 space-x-4 text-lg lg:text-xl">
        M/M
      </div>
    </div>
  );
}

export default Footer;
