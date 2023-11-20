import "./NavvBar.css"
import Card from "./CartWidget"
const NavBar = () => {
  return (
    <nav className="NavBar">
      <Link to ='/'>
        <h3>Ecommerce</h3>
      </Link>
        <div className="Categories">
          <Navlink to=
          {'/category/celular'}className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>
            
          a</Navlink>
          <Navlink to={'/category/consola'}className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>B</Navlink>
          <Navlink to={'/category/pc'}className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>C</Navlink>
        
          <Card/>
          

        </div>
    </nav>
  )
}
   
    
    export default NavBar