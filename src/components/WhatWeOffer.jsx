

const WhatWeOfferSection = () => {
  return (
    <div className="bg-blue-100 px-7">
        <div className="px-4 py-12 flex gap-8 flex-col">
            <div className="flex flex-col gap-2">
                <p className="text-blue-600 font-semibold text-base">What we offer!</p>
                <h3 className="font-semibold text-2xl text-gray-900">What do we have to show at St. Endas?</h3>
            </div>
            <div className="flex flex-col gap-8 w-full">
                <div className="flex md:w-2/3 w-full float-left">
                    <img src="/girl.jpeg" alt="girl" className="h-60 object-cover w-auto hidden md:inline-block" />
                    <div className="md:px-4 md:py-6 flex flex-col gap-2">
                        <p className="text-gray-900 font-semibold text-xl">Modern facilities</p>
                        <p className="text-gray-700 font-normal text-base">St Endas boasts of state-of-the-art teaching and learning equipment across all classrooms and laboratories. Our science labs boasts of the latest equipment, enabling hands on exploration and scientific discovery. </p>
                    </div>
                </div>
                <div className="flex md:w-2/3 w-full self-end">
                    <div className="md:px-4 md:py-6 flex flex-col gap-2">
                        <p className="text-gray-900 font-semibold text-xl">Day/Boarding</p>
                        <p className="text-gray-700 font-normal text-base">We provide quality hostel accommodation and boarding services for students coming from far and near. While those who choose to, can access our campus daily and get quality education.</p>
                    </div>
                    <img src="/school.jpeg" alt="girl" className="h-60 object-cover w-auto hidden md:inline-block" />
                </div>
                <div className="flex md:w-2/3 w-full float-left">
                    <img src="/people.jpeg" alt="girl" className="h-60 object-cover w-auto hidden md:inline-block" />
                    <div className="md:px-4 md:py-6 flex flex-col gap-2">
                        <p className="text-gray-900 font-semibold text-xl">Skill acquisition</p>
                        <p className="text-gray-700 font-normal text-base">Our students are aided and encouraged in the development of relevant skills across different sectors, such as tech, event planning, fashion design and more.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default WhatWeOfferSection;
