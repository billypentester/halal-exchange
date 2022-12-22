import React from 'react'
import logo from './../images/logo.png'
import { Link } from 'react-router-dom'

function Navbar() {
  return (    
    <nav class="navbar navbar-expand-lg navbar-light bg-primary w-100" style={{ position:'absolute', top:0, zIndex:10 }}>  

        <div class="container">    

            <button class="navbar-toggler" type="button" data-mdb-toggle="collapse" data-mdb-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <i class="fas fa-bars"></i>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">      
                <Link class="navbar-brand mt-2 mt-lg-0 p-2" to="/">
                    <img src={logo} alt="MDB Logo" width='70px' loading="lazy" />
                </Link>      
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <Link class="nav-link mx-3 text-light" to="/swap">Swap</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link mx-3 text-light" to="/tokens">Tokens</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link mx-3 text-light" to="/pools">Pools</Link>
                    </li>
                </ul> 
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                    <button type="button" data-mdb-ripple-color="primary" class="btn btn-light mx-3 btn-rounded">Connect Wallet</button>
                    <button type="button" data-mdb-ripple-color="primary" class="btn btn-light mx-2 btn-floating">
                        <i style={{ fontSize:'20px' }} class="fa-solid fa-gear text-primary"></i>
                    </button>
                    <button type="button" data-mdb-ripple-color="primary" class="btn btn-light mx-2 btn-floating">
                        <i style={{ fontSize:'20px' }} class="fa-solid fa-ellipsis"></i>
                    </button>
                </ul>      
            </div> 

        </div> 
         
    </nav>
  )
}

export default Navbar