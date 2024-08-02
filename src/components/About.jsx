

const AboutSection = () => {
  return (
    <div className="px-7">
        <div className="container mx-auto px-4 py-12 md:flex md:items-center md:space-x-8">
            <div className="md:w-1/2">
                <h2 className="text-blue-600 text-xl font-semibold mb-2">About Us</h2>
                <h3 className="text-3xl font-bold mb-4">We help build future innovators</h3>
                <p className="text-gray-700 mb-4">
                    St Endas College Agbarho is a subsidiary of the Warri Catholic Diocese. She was founded in 
                    the year __ by __ and since then, she has helped in shaping the morals and academic 
                    excellence of hundreds of students that passed through her. In St Endas college we are going 
                    to equip the child for life and also increase the child&apos;s holistic development.
                </p>
                <p className="text-gray-700 mb-4">
                    But to achieve our goal, we need to instill the spirit of creativity. We teach our children both 
                    academic and social economic skills that will allow them to build a meaningful life and 
                    contribute to the society.
                </p>
                <a href="#" className="text-blue-600 font-normal">Read more &gt;&gt;&gt;&gt;</a>
            </div>
            <div className="md:w-1/2 mt-8 md:mt-0">
                <img src="/boy.jpeg" alt="college" className="w-full h-80 object-cover" />
            </div>
        </div>
    </div>
  );
};

export default AboutSection;
