import { motion } from 'framer-motion';
import './Navbar.css';

const Navbar = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="navbar bg-transparent backdrop-blur-sm">
      <motion.div 
        className="logo"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">MD</span>
      </motion.div>
      <div className="nav-links">
        {[
          { id: 'hero', label: 'Accueil' },
          { id: 'projects', label: 'Projets' },
          { id: 'experience', label: 'Parcours' },
          { id: 'contact', label: 'Contact' }
        ].map(({ id, label }) => (
          <motion.div
            key={id}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <button 
              onClick={() => scrollToSection(id)}
              className="text-gray-300 hover:text-white transition-colors"
            >
              {label}
            </button>
          </motion.div>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
