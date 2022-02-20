import '../../styles/components/layout/Header.css'

const Header = (props) => {
    return (<header>
           <div className= 'headerensi'>
           <img src="imagenes/icono2.png" alt="" className="foto" />
             <h1>Astronomia-S</h1>
           </div>
           <div className= 'backend'>
           <a href="/admin/login" className='reg-log'>Iniciar sesion</a>
           <a href="/admin/register" className='reg-log'>Registrarse</a>
           </div>

           </header>)
};
export default Header;