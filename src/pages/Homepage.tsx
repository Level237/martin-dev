import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { FaGithub, FaCode, FaDatabase, FaReact, FaNodeJs, FaLaravel, FaHtml5, FaCss3 } from 'react-icons/fa';
import { SiJavascript, SiTypescript } from 'react-icons/si';
import type { IconType } from 'react-icons';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../styles/swiper.css';
import fecascrab from "../assets/fecascrab.png"
import akevas from "../assets/akevas.png"
import breteuil from "../assets/breteuil.png"
import hide from "../assets/hide.png"
import sharaco from "../assets/sharaco.png"
import enyfondation from "../assets/enyfondation.png"
import goflyfits from "../assets/goflyfits.png"
interface Project {
  title: string;
  description: string;
  image: string;
  tech: string[];
}

interface Experience {
  date: string;
  title: string;
  company: string;
  description: string;
}

interface TimelineItemProps extends Experience {
  index: number;
}

interface FloatingIconProps {
  icon: IconType;
  className?: string;
}

interface StatCardProps {
  title: string;
  value: string;
  icon: IconType;
}

const FloatingIcon: React.FC<FloatingIconProps> = ({ icon: Icon, className = "" }) => (
  <motion.div
    className={`absolute text-gray-700/20 ${className}`}
    animate={{
      y: [0, -10, 0],
      rotate: [-5, 5, -5],
    }}
    transition={{
      duration: 5,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  >
    <Icon size={30} />
  </motion.div>
);

const StatCard: React.FC<StatCardProps> = ({ title, value, icon: Icon }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="bg-gray-800/40 backdrop-blur-sm p-4 rounded-xl border border-purple-500/20"
  >
    <div className="flex items-center gap-3">
      <div className="p-3 bg-purple-500/20 rounded-lg">
        <Icon className="text-purple-400" size={24} />
      </div>
      <div>
        <p className="text-gray-400 text-sm">{title}</p>
        <p className="text-2xl font-bold text-gray-200">{value}</p>
      </div>
    </div>
  </motion.div>
);

const TimelineItem: React.FC<TimelineItemProps> = ({ date, title, company, description, index }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -50 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="mb-8 relative"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : { scale: 0 }}
        transition={{ duration: 0.3, delay: index * 0.2 }}
        className="absolute -left-10 w-4 h-4 bg-purple-500 rounded-full"
      />
      <motion.div
        className="bg-gray-800 bg-opacity-50 p-6 rounded-lg shadow-xl border border-purple-500/20 backdrop-blur-sm"
      >
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-semibold text-gray-200">{title}</h3>
          <span className="text-purple-400 text-sm">{date}</span>
        </div>
        <p className="text-gray-400 mb-2">{company}</p>
        <p className="text-gray-300">{description}</p>
      </motion.div>
    </motion.div>
  );
};

const projects: Project[] = [
  {
    title: "FecaScrab",
    description: "Plateforme officielle de la fédération camerounaise de scrabble",
    image: fecascrab,
    tech: ["React Js", "Node.js", "Typescript"]
  },
  {
    title: "Akevas",
    description: "Marketplace des boutiques en ligne",
    image: akevas,
    tech: ["Laravel", "React Js", "Typescript"]
  },
  {
    title: "Hide",
    description: "Social Network for hidden people",
    image: hide,
    tech: ["Next Js", "React Js", "Mongo DB"]
  },
  {
    title: "Breteuil dentaire",
    description: "Site web vitrine d'un cabinet dentaire",
    image: breteuil,
    tech: ["Laravel", "Bootstrap", "Jquery"]
  },
  
  {
    title: "Sharaco",
    description: "Generateur de devis pour les entreprises et les frelancers",
    image:  sharaco,
    tech: ["Larave Api", "React Js", "Mysql"]
  },
  {
    title: "Eny Fondation",
    description: "Association de soutien des orphelins et des enfants défavorisés",
    image: enyfondation,
    tech: ["Wordpress"]
  },
  {
    title: "Goflyfits",
    description: "Application de location de vetements d'evenement",
    image: goflyfits,
    tech: ["React", "TMDB API", "Redux"]
  },
];

const experiences: Experience[] = [
  {
    date: "Janvier 2024 - Présent",
    title: "Développeur Full Stack",
    company: "TechCorp Solutions",
    description: "Développement d'applications web modernes avec React et Node.js. Mise en place d'architectures scalables et maintenance de bases de données."
  },
  {
    date: "Juin 2023 - Décembre 2023",
    title: "Développeur Frontend",
    company: "DigitalWave Agency",
    description: "Création d'interfaces utilisateur réactives et optimisation des performances des applications React."
  },
  {
    date: "Janvier 2023 - Mai 2023",
    title: "Développeur Laravel",
    company: "WebSolutions Inc",
    description: "Développement de solutions e-commerce et intégration de systèmes de paiement."
  },
  {
    date: "Juillet 2022 - Décembre 2022",
    title: "Développeur Full Stack Junior",
    company: "StartupTech",
    description: "Participation au développement de nouvelles fonctionnalités et maintenance d'applications existantes."
  }
];

const Homepage = () => {
  return (
    <div className="min-h-screen overflow-hidden bg-gradient-to-br from-[#0F0F0F] via-[#1A1A1A] to-[#2D1F3D]">
      {/* Hero Section */}
      <section id="hero" className="min-h-screen mt-16 relative flex items-center justify-center px-4 sm:px-6 lg:px-8">
        {/* Floating Icons */}
        <FloatingIcon icon={FaReact} className="top-1/4 left-1/4" />
        <FloatingIcon icon={FaNodeJs} className="top-1/3 right-1/4" />
        <FloatingIcon icon={SiJavascript} className="bottom-1/3 left-1/3" />
        <FloatingIcon icon={SiTypescript} className="top-1/2 right-1/3" />
        <FloatingIcon icon={FaHtml5} className="bottom-1/4 left-1/5" />
        <FloatingIcon icon={FaCss3} className="top-1/3 right-1/5" />
        <FloatingIcon icon={FaLaravel} className="bottom-13 right-1/2" />
        <div className="container mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-4">
              Martin Developer
            </h1>
            <p className="text-xl text-gray-300 mb-8">Développeur Web Full Stack Passionné</p>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <span className="px-4 py-2 bg-gray-800 bg-opacity-50 rounded-full shadow-lg text-gray-300 border border-purple-500/20">React</span>
              <span className="px-4 py-2 bg-gray-800 bg-opacity-50 rounded-full shadow-lg text-gray-300 border border-purple-500/20">TypeScript</span>
              <span className="px-4 py-2 bg-gray-800 bg-opacity-50 rounded-full shadow-lg text-gray-300 border border-purple-500/20">Node.js</span>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <StatCard 
                title="Projets Réalisés" 
                value="15+" 
                icon={FaCode}
              />
              <StatCard 
                title="Contributions Github" 
                value="500+" 
                icon={FaGithub}
              />
              <StatCard 
                title="Technologies Maîtrisées" 
                value="10+" 
                icon={FaDatabase}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-[#1A1A1A]/30 backdrop-blur-sm" >
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Mes Projets</h2>
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
                <div className="bg-gray-800 bg-opacity-50 rounded-xl shadow-xl overflow-hidden border border-purple-500/20 backdrop-blur-sm">
                  <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 text-gray-200">{project.title}</h3>
                    <p className="text-gray-400 mb-4 truncate">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, i) => (
                        <span key={i} className="px-3 py-1 bg-gray-700 rounded-full text-sm text-gray-300">
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
      <section id="experience" className="py-20 bg-[#1A1A1A]/20 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Mon Parcours</h2>
          <div className="max-w-3xl mx-auto">
            <div className="relative">
              <div className=" pr-4 scrollbar-thin scrollbar-thumb-purple-500 scrollbar-track-gray-800">
                <div className="relative pl-8 border-l-2 border-purple-500">
                  <AnimatePresence>
                    {experiences.map((experience, index) => (
                      <TimelineItem
                        key={index}
                        index={index}
                        {...experience}
                      />
                    ))}
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-[#1A1A1A]/30 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Me Contacter</h2>
          <div className="max-w-lg mx-auto">
            <form className="space-y-6">
              <div>
                <label className="block text-gray-300 mb-2">Nom</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-2 bg-gray-800 bg-opacity-50 border border-purple-500/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-200" 
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-2">Email</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-2 bg-gray-800 bg-opacity-50 border border-purple-500/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-200" 
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-2">Message</label>
                <textarea 
                  rows={4} 
                  className="w-full px-4 py-2 bg-gray-800 bg-opacity-50 border border-purple-500/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-200"
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="w-full py-3 px-6 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-lg hover:opacity-90 transition-opacity"
              >
                Envoyer
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-4"> 2025 Martin Developer. Tous droits réservés.</p>
          <div className="flex justify-center space-x-6">
            <a href="#" className="hover:text-purple-400 transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-purple-400 transition-colors">GitHub</a>
            <a href="#" className="hover:text-purple-400 transition-colors">Twitter</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Homepage;
