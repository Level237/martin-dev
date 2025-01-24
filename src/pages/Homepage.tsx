import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../styles/swiper.css';

const projects = [
  {
    title: "E-commerce Platform",
    description: "Une plateforme e-commerce complète avec panier et paiement",
    image: "https://via.placeholder.com/400x300",
    tech: ["React", "Node.js", "MongoDB", "Stripe"]
  },
  {
    title: "Task Manager",
    description: "Application de gestion de tâches avec fonctionnalités collaboratives",
    image: "https://via.placeholder.com/400x300",
    tech: ["React", "TypeScript", "Firebase"]
  },
  {
    title: "Portfolio v1",
    description: "Premier portfolio personnel avec animations et design moderne",
    image: "https://via.placeholder.com/400x300",
    tech: ["React", "Framer Motion", "Tailwind CSS"]
  },
  {
    title: "Weather App",
    description: "Application météo avec géolocalisation et prévisions sur 7 jours",
    image: "https://via.placeholder.com/400x300",
    tech: ["React", "OpenWeather API", "Styled Components"]
  },
  {
    title: "Blog Platform",
    description: "Plateforme de blog avec système de gestion de contenu",
    image: "https://via.placeholder.com/400x300",
    tech: ["Next.js", "Prisma", "PostgreSQL"]
  },
  {
    title: "Chat Application",
    description: "Application de chat en temps réel avec salles de discussion",
    image: "https://via.placeholder.com/400x300",
    tech: ["React", "Socket.io", "Express"]
  },
  {
    title: "Movie Database",
    description: "Application de recherche et de recommandation de films",
    image: "https://via.placeholder.com/400x300",
    tech: ["React", "TMDB API", "Redux"]
  },
  {
    title: "Fitness Tracker",
    description: "Application de suivi d'exercices et de nutrition",
    image: "https://via.placeholder.com/400x300",
    tech: ["React Native", "GraphQL", "Node.js"]
  }
];

const Homepage = () => {
  return (
    <div className="min-h-screen overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Section */}
      <section className="min-h-screen  flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-4">
            Martin Developer
          </h1>
          <p className="text-xl text-gray-600 mb-8">Développeur Web Full Stack Passionné</p>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="px-4 py-2 bg-white rounded-full shadow-md text-gray-700">React</span>
            <span className="px-4 py-2 bg-white rounded-full shadow-md text-gray-700">TypeScript</span>
            <span className="px-4 py-2 bg-white rounded-full shadow-md text-gray-700">Node.js</span>
          </div>
        </motion.div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-white" id="projects">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Mes Projets</h2>
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000 }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="project-slider"
          >
            {projects.map((project, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, i) => (
                        <span key={i} className="px-3 py-1 bg-gray-100 rounded-full text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 bg-gray-50" id="experience">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Mon Parcours</h2>
          <div className="max-w-3xl mx-auto">
            <div className="relative pl-8 border-l-2 border-blue-500">
              {/* Add your experience items here */}
              <div className="mb-12 relative">
                <div className="absolute -left-10 w-4 h-4 bg-blue-500 rounded-full"></div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-2">Développeur Full Stack</h3>
                  <p className="text-gray-600 mb-2">Entreprise XYZ • 2023 - Présent</p>
                  <p className="text-gray-700">Description de vos responsabilités et réalisations...</p>
                </div>
              </div>
              {/* Add more experience items as needed */}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white" id="contact">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Me Contacter</h2>
          <div className="max-w-lg mx-auto">
            <form className="space-y-6">
              <div>
                <label className="block text-gray-700 mb-2">Nom</label>
                <input type="text" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Email</label>
                <input type="email" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Message</label>
                <textarea rows={4} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
              </div>
              <button type="submit" className="w-full py-3 px-6 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                Envoyer
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-4"> 2025 Martin Developer. Tous droits réservés.</p>
          <div className="flex justify-center space-x-6">
            <a href="#" className="hover:text-blue-400">LinkedIn</a>
            <a href="#" className="hover:text-blue-400">GitHub</a>
            <a href="#" className="hover:text-blue-400">Twitter</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Homepage;
