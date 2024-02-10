import { Outlet, useLocation } from "react-router-dom"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"

function App() {

  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <div>
    {!isHome && (
        <div className="bg-black">
          <Navbar/>
        </div>
    )}
    <Outlet></Outlet>
    <Footer/>
    </div>
  )
}

export default App
