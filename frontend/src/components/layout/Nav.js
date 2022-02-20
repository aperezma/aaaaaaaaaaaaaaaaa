import NavLink from "../NavLink";
import '../../styles/components/layout/Nav.css'

const Nav = (props) => {
    return (
        <section className="contenedor">
        <nav>
            <ul className="menu">
                <li><NavLink activeClassName="activo" exact to="/Home">Inicio</NavLink></li>
                <li><NavLink activeClassName="activo" exact to= "/Articulos">Articulos</NavLink></li>
                <li><NavLink activeClassName="activo" exact to ="/PoliticasPrivacidad">Politicas de privacidad</NavLink></li>
                <li><NavLink activeClassName="activo" exact to = "/Contacto">Contacto</NavLink></li>
              </ul>
        </nav>
    </section>

    )    
};
export default Nav;