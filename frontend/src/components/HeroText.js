import { Link } from "react-router-dom";

export default function HeroText() {
  return (
    <div>
      <h5 className="italic font-[Kalam] text-[#333333]">MAGGY MOON</h5>
      <h1 className="text-5xl">
        JAPANESE BASED<br></br>Model <span className="text-[#F6A794]">&</span> STYLIST
      </h1>
      <p className="font-[Nunito] mt-2 text-justify w-[70%]">
        Japanese-based model and stylist Maggy Moon expresses his style through vibrant colors and themed photo shoots. Her portfolio website has a playful vibe and shows visitors exactly who he is.
      </p>
      <div className="flex mt-3">
        <button className="px-6 py-2 bg-[#FFA465] text-white mr-4">
          <Link to="/gallery">Gallery</Link>
        </button>
        <button className="px-6 py-2 border border-gray-400">
          <Link to="contactus">Contact Us</Link>
        </button>
      </div>
    </div>
  );
}
