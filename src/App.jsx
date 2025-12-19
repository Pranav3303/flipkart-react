import { Outlet, useLocation } from 'react-router-dom'
import Navbar from './component/navbar'
import Category from './component/Category'
import LandingPage from './component/LandingPage'
import Footer from './component/Footer'


const App = () => {
  const location = useLocation();
  return (
    <div>
      <Navbar
      <Category />
      {location.pathname === '/' ? <LandingPage /> : <Outlet />}
      <Footer />
    </div>
  )
}

export default App