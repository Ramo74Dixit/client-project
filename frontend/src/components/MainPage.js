import HeroText from './HeroText';
import HeroImage from './HeroImage';
import Footer from './Footer';
import image1 from '../assets/image1.jpg'; // Import your image

export default function MainPage() {
  return (
    <div 
      className={`relative h-[90.75vh] flex flex-col md:bg-[white] sm:min-h-screen sm:bg-cover sm:bg-center`} // Default background color for larger screens
      style={{ 
        backgroundColor: window.innerWidth < 640 ? 'rgba(0, 0, 0, 1)' : 'transparent', // Apply background color with transparency
        backgroundImage: window.innerWidth < 640 ? `url(${image1})` : 'none', // Apply the background image only on small screens
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay effect */}
      {window.innerWidth < 640 && (
        <div className="absolute inset-0 bg-black opacity-40"></div>
      )}

      <div className="md:hidden flex items-center justify-center h-[90vh] m-auto p-10">
        <HeroText />
      </div>

      <div className="hidden md:flex">
        <div className="w-[89%] mt-3 flex">
          <div className="flex m-auto items-center justify-center p-10 md:w-[49%] md:flex md:items-center md:justify-center md:p-8">
            <HeroText />
          </div>
          <div className="md:w-[51%] md:h-[90vh] md:bg-cover md:overflow-hidden">
            <HeroImage className="hidden sm:block md:w-full md:h-[90vh] md:object-cover" />
          </div>
        </div>
        <div className="md:w-[10%] md:ml-auto md:bg-[#F7D9C4]"></div>
      </div>

    </div>
  );
}
