
import logo from './../../images/logo.png'
import { Link } from 'react-router-dom'
import ConnectWallet from './ConnectWallet';
import detectEthereumProvider from "@metamask/detect-provider";
import { useState, useEffect, useContext } from "react";
import { Token1Context } from "../../contexts/Token1Context";
function Navbar({shadow}) {
    const { connectWallet, walletAddress } = useContext(Token1Context);

    useEffect(() => {
        if (shadow) 
        {
            document.querySelector('.navbar').classList.remove('shadow-none')
            document.querySelector('.navbar').classList.add('shadow-lg')
        }
        else
        {
            document.querySelector('.navbar').classList.remove('shadow-lg')
            document.querySelector('.navbar').classList.add('shadow-none')
        }
    }, [shadow]);

  return (  
    <>  
    <nav className='navbar fixed-top navbar-expand-md navbar-light bg-primary w-100 shadow-none' >  

        <div className="container-lg container-fluid">    

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
       
                    <button type="button" data-mdb-ripple-color="primary" className="btn btn-light mx-3 btn-rounded" data-mdb-toggle="modal" data-mdb-target="#exampleModal"

                    >              <span>
                    {walletAddress.length > 0
                      ? `${walletAddress.substring(
                          0,
                          8
                        )}...${walletAddress.substring(38)}`
                      : "Connect Wallet"}
                  </span> </button>
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

    <ConnectWallet />

</>
  )
}

export default Navbar