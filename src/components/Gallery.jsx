

const GallerySection = () => {
  return (
    <div className="bg-gray-900 px-7 py-12">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-blue-400 text-xl font-semibold mb-2">All work and no play......</h2>
        <h3 className="text-3xl text-white font-bold mb-4">Here are some of our extracurricular activities/Gallery</h3>
        <p className="text-gray-400 mb-8">
          With a comprehensive curriculum, state-of-the-art facilities, and a wide range ...
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <img src="/boy4.jpeg" alt="Gallery Image 1" className="w-full h-64 object-cover" />
          <img src="/boy3.jpeg" alt="Gallery Image 2" className="w-full h-64 object-cover" />
          <img src="/dentist.jpeg" alt="Gallery Image 3" className="w-fill object-cover md:row-span-2" />
          <img src="/boy2.jpeg" alt="Gallery Image 4" className="w-full h-[300px] object-cover md:col-span-2" />
        </div>
      </div>
    </div>
  );
};

export default GallerySection;
