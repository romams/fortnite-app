import './footer.css';

function Footer() {
    return <div className="footer mt-5">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-12 text-center">
                    <h4 className="footer-heading">FortTracker</h4>
                </div>
            </div>
            <div className='col-md4 col-sm-12'>
                <div className='menu-footer'>
                    <h5 className='quick-menu'>Quick Menu</h5> 
                    <ul>
                        <li>
                            <a>Home</a>
                        </li>
                        <li>
                            <a>News</a>
                        </li>
                        <li>
                            <a>Stats</a>
                        </li>
                        <li>
                            <a>Battlepass</a>
                        </li>
                    </ul>
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