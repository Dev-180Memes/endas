import Navbar from "./components/Navbar";
import HeroSection from "./components/Hero";
import AboutSection from "./components/About";
import WhatWeOfferSection from "./components/WhatWeOffer";
import GallerySection from "./components/Gallery";
import SchoolNewsSection from "./components/News";

const App = () => {
  return (
    <div className="w-full">
      <Navbar />
      <HeroSection />
      <div className="bg-blue-100 md:px-20 md:py-11 px-5 py-3">
        <p className="font-normal md:text-lg text-sm text-center text-gray-700">ST Endas Colege Agbarho has been a symbol of excellence in education over the years. Our mission is to continue to enhance the community by providing safe and clean environment for students</p>
      </div>
      <AboutSection />
      <WhatWeOfferSection />
      <GallerySection />
      <SchoolNewsSection />
    </div>
  )
}

export default App
