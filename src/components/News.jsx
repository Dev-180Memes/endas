

// eslint-disable-next-line react/prop-types
const NewsCard = ({ title, description }) => {
  return (
    <div className="bg-white p-6 rounded-lg">
      <h4 className="text-xl font-semibold mb-2">{title}</h4>
      <p className="text-gray-700 mb-4">{description}</p>
      <a href="#" className="text-blue-600 font-normal">Read more &gt;&gt;&gt;&gt;&gt;&gt;</a>
    </div>
  );
};

const SchoolNewsSection = () => {
  const newsItems = [
    { title: 'New principal', description: 'Our students are aided and encouraged in the development of relevant skills across different sectors, such as tech, event planning, fashion design and more.' },
    { title: 'Admissions', description: 'Our students are aided and encouraged in the development of relevant skills across different sectors, such as tech, event planning, fashion design and more.' },
    { title: 'Celebrating fruit day', description: 'Our students are aided and encouraged in the development of relevant skills across different sectors, such as tech, event planning, fashion design and more.' },
    { title: 'Student blog', description: 'Our students are aided and encouraged in the development of relevant skills across different sectors, such as tech, event planning, fashion design and more.' },
    { title: 'Whispering palm', description: 'Our students are aided and encouraged in the development of relevant skills across different sectors, such as tech, event planning, fashion design and more.' },
    { title: 'Holiday', description: 'Our students are aided and encouraged in the development of relevant skills across different sectors, such as tech, event planning, fashion design and more.' },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <h3 className="text-3xl font-bold text-center mb-8">School news</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {newsItems.map((item, index) => (
          <NewsCard key={index} title={item.title} description={item.description} />
        ))}
      </div>
    </div>
  );
};

export default SchoolNewsSection;
