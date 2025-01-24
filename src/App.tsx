import { BrowserRouter as Router } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import AppRoutes from './routes/routes'
import Navbar from './components/Navbar'
import './App.css'

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <AnimatePresence mode="wait">
          <AppRoutes />
        </AnimatePresence>
      </div>
    </Router>
  )
}

export default App
