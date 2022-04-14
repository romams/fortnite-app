import './footer.css';
import { Link } from 'wouter';
import {GoMarkGithub} from 'react-icons/go'
import {AiFillHeart} from 'react-icons/ai'

function Footer() {
    return <div className="footer mt-5">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-12 text-center">
                    <h4 className="footer-heading">FtTracker</h4>
                </div>
            </div>
            <div className='row'>
                
                <div className='col-md-7 col-sm-5 col-6'>
                    <div className='menu-footer'>
                        <h5 className='quick-menu'>Quick Menu</h5>
                        <ul>
                            <li>
                                <Link href={`${process.env.PUBLIC_URL}/`} className="nav-link">Inicio</Link>
                            </li>
                            <li>
                                <Link href={`${process.env.PUBLIC_URL}/shop`} className="nav-link">Tienda</Link>
                            </li>
                            <li>
                                <Link href={`${process.env.PUBLIC_URL}/news`} className="nav-link">Noticias</Link>
                            </li>
                            <li>
                                <Link href={`${process.env.PUBLIC_URL}/stats`} className="nav-link">Estadisticas</Link>
                            </li>
                            <li>
                                <Link href={`${process.env.PUBLIC_URL}/battlepass`} className="nav-link">Pase de batalla</Link>
                            </li>
                        </ul>
                    </div>


                </div>

                <div className='col-md-5 col-sm-7 col-6'>
                    <div className='github-credits'>
                        <p>Alojado con <AiFillHeart /> en </p>
                        <GoMarkGithub  className='github-icon'/>
                    </div>
                </div>


            </div>
            <div className="row mt-3">
                <div className="col-md-12 col-sm-12 copyright">
                    {/* <p>
                        Desarrollado por <span style={{ color: '#ffffff' }}>Romario M.</span>
                    </p>
                    <p>
                        Este sitio web no está asociado a Epic Games. Todos los datos son recolectados de <a href='https://fortniteapi.io'>fortniteapi.io</a>
                    </p>
                    <p>
                        Alojado en <a href='https://github.com'>GitHub</a>
                    </p> */}
                </div>
            </div>
        </div>
    </div>
}

export default Footer;