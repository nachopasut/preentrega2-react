import "./NavvBar.css"
import Card from "./CartWidget"
const NavBar = () => {
  return (
    <nav className="NavBar">
      <link to ='/'>
        <h3>Ecommerce</h3>
      </link>
        <div className="Categories">
          <Navlink to={'/category/celular'}className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}></Navlink>
          <Navlink to={'/category/consola'}className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}></Navlink>
          <Navlink to={'/category/pc'}className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}></Navlink>
        
          <Card/>
          

        </div>
    </nav>
  )
}
   
    
    export default NavBar