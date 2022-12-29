import React from 'react'
import logo from './../../images/logo.png'
import { Link } from 'react-router-dom'

function Navbar() {
  return (    
    <nav className="navbar navbar-expand-lg navbar-light bg-primary w-100 shadow-none" style={{ position:'absolute', top:0, zIndex:10 }}>  

        <div className="container">    

            <button className="navbar-toggler" type="button" data-mdb-toggle="collapse" data-mdb-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <i className="fas fa-bars"></i>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">      
                <Link className="navbar-brand mt-2 mt-lg-0 p-2" to="/">
                    <img src={logo} alt="MDB Logo" width='70px' loading="lazy" />
                </Link>      
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link className="nav-link mx-3 text-light" to="/swap">Swap</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link mx-3 text-light" to="/tokens">Tokens</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link mx-3 text-light" to="/pools">Pools</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link mx-3 text-light" to="/bridge">Bridge</Link>
                    </li>
                </ul> 
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <button type="button" data-mdb-ripple-color="primary" className="btn btn-light mx-3 btn-rounded">Connect Wallet</button>
                    <button type="button" data-mdb-ripple-color="primary" className="btn btn-light mx-2 btn-floating">
                        <i style={{ fontSize:'20px' }} className="fa-solid fa-gear text-primary"></i>
                    </button>
                    <button type="button" data-mdb-ripple-color="primary" className="btn btn-light mx-2 btn-floating">
                        <i style={{ fontSize:'20px' }} className="fa-solid fa-ellipsis"></i>
                    </button>
                </ul>      
            </div> 

        </div> 
         
    </nav>
  )
}

export default Navbar