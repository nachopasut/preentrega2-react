import "./NavvBar.css"
import Card from "./CartWidget"
import { Link, NavLink } from "react-router-dom"
const NavBar = () => {
  return (
    <nav className="navbar">
    <ul className="navbar-nav">
      <li className="nav-item">
        <a href="/" className="nav-link">Inicio</a>
      </li>
      <li className="nav-item">
        <a href="/about" className="nav-link">Acerca de</a>
      </li>
      <li className="nav-item">
        <a href="/contact" className="nav-link">Contacto</a>
      </li>
      </ul>
      
      <Link to =  '/'>
        <h3>Ecommerce</h3>
      </Link>
        <div className="Categories">
          <NavLink to={'/category/celular'}className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}></NavLink>
          <NavLink to={'/category/consola'}className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}></NavLink>
          <NavLink to={'/category/pc'}className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}></NavLink>
          </div>
          <Card/>
        </nav>
  )
}
   
    
    export default NavBar