import { Routes, Route, useLocation } from 'react-router-dom'
import Homepage from '../pages/Homepage'


const AppRoutes = () => {
  const location = useLocation()
  
  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<Homepage />} />

    </Routes>
  )
}

export default AppRoutes