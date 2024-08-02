

const HeroSection = () => {
  return (
    <div className="relative bg-cover bg-center h-screen flex items-center justify-center" style={{ backgroundImage: `url('/hero.jpeg')` }}>
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      <div className="relative z-10 flex flex-col justify-center items-center text-center text-white h-full px-4 md:w-3/4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome to St. Endas College</h1>
        <p className="text-lg md:text-xl mb-8">
          At St. Enda&apos;s College Agbarho, we are dedicated to shaping the leaders of tomorrow. 
          Our commitment to academic excellence, and moral integrity ensures that every student 
          is not only prepared for success but also empowered to make a positive impact on the world.
        </p>
        <a href="#" className="px-12 py-3 bg-blue-600 text-white font-normal rounded-md text-lg">Register now</a>
      </div>
    </div>
  );
};

export default HeroSection;
