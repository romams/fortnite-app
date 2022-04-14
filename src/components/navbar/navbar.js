import { Link } from 'wouter';
import './navbar.css'

function Navbar() {
  
  return <>
    <header id="header">
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container-fluid">
                <a className="navbar-brand navbar-title" href="#">FtTracker</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav navbar-nav-scroll" style={{bsScrollHeight: '100px'}}>
                      <Link href={`${process.env.PUBLIC_URL}/`} className="nav-link">Inicio</Link>
                      <Link href={`${process.env.PUBLIC_URL}/shop`} className="nav-link">Tienda</Link>
                      <Link href={`${process.env.PUBLIC_URL}/news`} className="nav-link">Noticas</Link>
                      <Link href={`${process.env.PUBLIC_URL}/stats`} className="nav-link">Estadisticas</Link>
                      <Link href={`${process.env.PUBLIC_URL}/battlepass`} className="nav-link">Pase de batalla</Link>
                    </div>
                  </div>

              </div>
          </nav>
    </header>
  </>
}

export default Navbar;