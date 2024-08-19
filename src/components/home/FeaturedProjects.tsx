import Image from 'next/image';

interface Project {
  id: number;
  title: string;
  image: string;
}

const FeaturedProjects: React.FC = () => {
  const projects: Project[] = [
    { id: 1, title: 'Project 1', image: '/images/project1.jpg' },
    { id: 2, title: 'Project 2', image: '/images/project2.jpg' },
    { id: 3, title: 'Project 3', image: '/images/project3.jpg' },
  ];

  return (
    <section className="py-20 px-4 bg-gray-100">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <Image src={project.image} alt={project.title} width={400} height={300} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <a href="#" className="text-blue-500 hover:text-blue-600 mt-2 inline-block">Learn More</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedProjects;