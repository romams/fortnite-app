import { Link } from 'wouter';

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
                      <Link href="/" className="nav-link">Home</Link>
                      <Link href="/" className="nav-link">Shop</Link>
                      <Link href="/news" className="nav-link">news</Link>
                      <Link href="/stats" className="nav-link">Estats</Link>
                      <Link href="/stats" className="nav-link">Game Mode</Link>
                      <Link href="/battlepass" className="nav-link">Battle Pass</Link>
                    </div>
                  </div>

              </div>
          </nav>
    </header>
  </>
}

export default Navbar;