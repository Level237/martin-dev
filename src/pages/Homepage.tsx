import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.css'
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { FaGithub, FaCode, FaDatabase, FaReact, FaNodeJs, FaLaravel, FaHtml5, FaCss3 } from 'react-icons/fa';
import { SiJavascript, SiTypescript } from 'react-icons/si';
import type { IconType } from 'react-icons';

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
  year: string;
  status: "En ligne" | "En maintenance" | "Hors ligne";
  githubUrl?: string;
  liveUrl?: string;
  fullDescription?: string;
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

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
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
    className="bg-gray-800/40 backdrop-blur-sm p-3 py-4 rounded-xl border border-purple-500/20"
  >
    <div className="flex items-center  gap-3">
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
        className="bg-gray-800 bg-opacity-50 p-6 max-sm:p-5 rounded-lg shadow-xl border border-purple-500/20 backdrop-blur-sm"
      >
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl max-sm:text-lg font-semibold text-gray-200">{title}</h3>
          <span className="text-purple-400   text-sm">{date}</span>
        </div>
        <p className="text-gray-400 mb-2">{company}</p>
        <p className="text-gray-300">{description}</p>
      </motion.div>
    </motion.div>
  );
};

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-gray-800 p-6 rounded-xl max-w-2xl w-full mx-4 shadow-2xl border border-purple-500/20"
        onClick={e => e.stopPropagation()}
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

const projects: Project[] = [
  {
    title: "FecaScrab",
    description: "Plateforme officielle de la fédération camerounaise de scrabble",
    image: fecascrab,
    tech: ["React Js", "Node.js", "Typescript", "Zustand", "TailwindCSS"],
    year: "2025",
    status: "En ligne",
    githubUrl: "https://github.com/Level237/fecascrab",
    liveUrl: "https://fecascrab.com",
    fullDescription: "Une plateforme complète permettant aux joueurs de scrabble de participer à des tournois en ligne, suivre leurs statistiques et interagir avec la communauté."
  },
  {
    title: "Akevas",
    description: "Marketplace des boutiques en ligne",
    image: akevas,
    tech: ["Laravel Api", "React Js", "Typescript", "TailwindCSS","Redux"],
    year: "2025",
    status: "Hors ligne",
    githubUrl: "https://github.com/level237/akevas",
    liveUrl: "#",
    fullDescription: "Un marketplace permettant aux vendeurs de créer leur boutique en ligne et de vendre leurs produits."
  },
  {
    title: "Hide",
    description: "Social Network for hidden people",
    image: hide,
    tech: ["Next Js", "React Js", "Mongo DB",'Zustand', "TailwindCSS"],
    year: "2024",
    status: "Hors ligne",
    githubUrl: "https://github.com/level237/hide",
    liveUrl: "#",
    fullDescription: "Un réseau social permettant aux personnes de se connecter et de partager leurs expériences de facon anonyme."
  },
  {
    title: "Breteuil dentaire",
    description: "Site web vitrine d'un cabinet dentaire",
    image: breteuil,
    tech: ["Laravel", "Bootstrap", "Jquery"],
    year: "2021",
    status: "En ligne",
    githubUrl: "https://github.com/Level237/Breteuil-dentaire",
    liveUrl: "https://www.breteuildentaire.fr",
    fullDescription: "Un site web vitrine pour un cabinet dentaire, permettant aux patients de consulter les informations et de prendre rendez-vous."
  },
  {
    title: "Sharaco",
    description: "Generateur de devis pour les entreprises et les frelancers",
    image: sharaco,
    tech: ["Larave Api", "React Js", "Mysql", "TailwindCSS","Redux","Rtk Query"],
    year: "2024",
    status: "Hors ligne",
    githubUrl: "https://github.com/level237/sharaco",
    liveUrl: "#",
    fullDescription: "Un générateur de devis pour les entreprises et les freelancers, permettant de créer des devis personnalisés et de les envoyer à leurs clients."
  },
  {
    title: "Eny Fondation",
    description: "Association de soutien des orphelins et des enfants défavorisés",
    image: enyfondation,
    tech: ["Wordpress"],
    year: "2023",
    status: "Hors ligne",
    githubUrl: "#",
    liveUrl: "#",
    fullDescription: "Un site web pour une association de soutien des orphelins et des enfants défavorisés, permettant de collecter des dons et de sensibiliser le public à la cause."
  },
  {
    title: "Goflyfits",
    description: "Application de location de vetements d'evenement",
    image: goflyfits,
    tech: ["Laravel", "Bootstrap", "Jquery"],
    year: "2024",
    status: "En ligne",
    githubUrl: "https://github.com/level237/goflyfits",
    liveUrl: "https://goflyfits.kensoh-clt.com",
    fullDescription: "Une application de location de vêtements d'événement, permettant aux utilisateurs de louer des vêtements pour des événements spéciaux."
  },
];

const experiences: Experience[] = [
  {
    date: "Novembre 2024 - à present",
    title: "Développeur Frontend",
    company: "ZEGUILD",
    description: "Conception et maintenance des applications web pour les PME et les entreprises"
  },
  {
    date: "Janvier 2024 - à present",
    title: "Sofware Engineer",
    company: "independant",
    description: "Création des applications robustes et performantes avec des technologies frontend modernes"
  },
  {
    date: "Decembre 2024 - Janvier 2025",
    title: "Responsable technique par interim",
    company: "GECAM",
    description: "Maintenance des materiels informatiques et logiciels de la Gecam"
  },
  {
    date: "Janvier 2023 - Aout 2023",
    title: "Développeur Laravel",
    company: "K-SOFT",
    description: "Création d'une Api de voyage et maintenance d'applications frontend et backend"
  },
  {
    date: "Mars 2021 - Dec 2023",
    title: "Développeur Full Stack",
    company: "Stillforce technologies",
    description: "Developpeur Full Stack et Responsable des projets en equipe"
  },
];

const Homepage = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div className="min-h-screen overflow-hidden bg-gradient-to-br from-[#0F0F0F] via-[#1A1A1A] to-[#2D1F3D]">
      {/* Hero Section */}
      <section id="hero" className="min-h-screen mt-16 relative flex items-center justify-center px-4 sm:px-6 lg:px-8">
        {/* Floating Icons */}
        <FloatingIcon icon={FaReact} className="top-1/4 max-sm:top-16 left-1/4" />
        <FloatingIcon icon={FaNodeJs} className="top-1/3 max-sm:top-16 right-1/4" />
        <FloatingIcon icon={SiJavascript} className="bottom-1/3 max-sm:bottom-28 max-sm:left-80 left-1/3" />
        <FloatingIcon icon={SiTypescript} className="top-1/2 max-sm:bottom-16 max-sm:left-8 right-1/3" />
        <FloatingIcon icon={FaHtml5} className="bottom-1/4 max-sm:bottom-1/2 left-1/5" />
        <FloatingIcon icon={FaCss3} className="top-1/3  right-1/5" />
        <FloatingIcon icon={FaLaravel} className="bottom-13 right-1/2" />
        <div className="container mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl max-sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-4">
              Martin Developer
            </h1>
            <p className="text-xl max-sm:text-sm text-gray-300 mb-8">Frontend Developer</p>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <span className="px-4 py-2 max-sm:text-sm max-sm:px-4 max-sm:py-3 bg-gray-800 bg-opacity-50 rounded-full shadow-lg text-gray-300 border border-purple-500/20">React</span>
              <span className="px-4 py-2 max-sm:text-sm max-sm:px-4 max-sm:py-3 bg-gray-800 bg-opacity-50 rounded-full shadow-lg text-gray-300 border border-purple-500/20">TypeScript</span>
              <span className="px-4 py-2 max-sm:text-sm max-sm:px-4 max-sm:py-3 bg-gray-800 bg-opacity-50 rounded-full shadow-lg text-gray-300 border border-purple-500/20">Node.js</span>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-sm:gap-4 max-w-3xl mx-auto">
              <StatCard 
                title="Projets Réalisés" 
                value="50+" 
                icon={FaCode}
              />
              <StatCard 
                title="Contributions Github" 
                value="5K+" 
                icon={FaGithub}
              />
              <StatCard 
                title="Technologies Maîtrisées" 
                value="4+" 
                icon={FaDatabase}
              />
            </div>
            
            <motion.a
              href="https://github.com/level237"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex  items-center gap-2 px-6 py-3 mt-20 text-white bg-gradient-to-r from-purple-600 to-pink-600 rounded-full hover:opacity-90 transition-opacity"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaGithub size={20} />
              Voir mon GitHub
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-[#1A1A1A]/30 backdrop-blur-sm">
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
                <motion.div 
                  className="bg-gray-800 bg-opacity-50 rounded-xl overflow-hidden backdrop-blur-sm border border-purple-500/20"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                  onClick={() => setSelectedProject(project)}
                >
                  <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-200 mb-2">{project.title}</h3>
                    <p className="text-gray-400 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.slice(0, 3).map((tech, techIndex) => (
                        <span key={techIndex} className="px-3 py-1 text-sm bg-purple-500/20 rounded-full text-purple-300">
                          {tech}
                        </span>
                      ))}
                      {project.tech.length > 3 && (
                        <span className="px-3 py-1 text-sm bg-purple-500/20 rounded-full text-purple-300">
                          +{project.tech.length - 3}
                        </span>
                      )}
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      <AnimatePresence>
        {selectedProject && (
          <Modal isOpen={!!selectedProject} onClose={() => setSelectedProject(null)}>
            <div className="relative">
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute -right-2 -top-2 p-2 text-gray-400 hover:text-white"
              >
                ✕
              </button>
              <img 
                src={selectedProject.image} 
                alt={selectedProject.title} 
                className="w-full h-48 object-cover rounded-lg mb-4" 
              />
              <h3 className="text-2xl font-bold text-gray-200 mb-2">{selectedProject.title}</h3>
              <div className="flex gap-3 mb-4">
                <span className={`px-3 py-1 rounded-full text-sm ${
                  selectedProject.status === "En ligne" 
                    ? "bg-green-500/20 text-green-300"
                    : selectedProject.status === "En maintenance"
                    ? "bg-yellow-500/20 text-yellow-300"
                    : "bg-red-500/20 text-red-300"
                }`}>
                  {selectedProject.status}
                </span>
                <span className="px-3 py-1 bg-purple-500/20 rounded-full text-purple-300 text-sm">
                  {selectedProject.year}
                </span>
              </div>
              <p className="text-gray-300 mb-6">{selectedProject.fullDescription || selectedProject.description}</p>
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-200 mb-2">Technologies utilisées</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tech.map((tech, index) => (
                    <span key={index} className="px-3 py-1 text-sm bg-purple-500/20 rounded-full text-purple-300">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex gap-4">
                {selectedProject.githubUrl && (
                  <motion.a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg text-white"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaGithub size={20} />
                    Voir le code
                  </motion.a>
                )}
                {selectedProject.liveUrl && (
                  <motion.a
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-500 rounded-lg text-white"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaCode size={20} />
                    Voir le projet
                  </motion.a>
                )}
              </div>
            </div>
          </Modal>
        )}
      </AnimatePresence>

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
