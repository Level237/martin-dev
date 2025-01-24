import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Navbar.css';

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="navbar">
      <motion.div 
        className="logo"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Link to="/">MD</Link>
      </motion.div>
      <div className="nav-links">
        {['/', '/projects', '/experience', '/contact'].map((path) => {
          const label = path === '/' ? 'Accueil' : path.slice(1).charAt(0).toUpperCase() + path.slice(2);
          return (
            <motion.div
              key={path}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                to={path}
                className={location.pathname === path ? 'active' : ''}
              >
                {label}
              </Link>
            </motion.div>
          );
        })}
      </div>
    </nav>
  );
};

export default Navbar;
