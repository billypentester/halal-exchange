import React, {useEffect} from 'react'
import logo from './../../images/logo.png'
import { Link } from 'react-router-dom'

function Navbar({shadow}) {

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
       
                    <button type="button" data-mdb-ripple-color="primary" className="btn btn-light mx-3 btn-rounded" data-mdb-toggle="modal" data-mdb-target="#exampleModal">Connect Wallet</button>
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

    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Connect Wallet</h5>
                    <button type="button" class="btn-close" data-mdb-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <button type="button" className="d-flex align-items-center btn btn-outline-secondary w-100 my-2" data-mdb-ripple-color="dark">
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/MetaMask_Fox.svg/2048px-MetaMask_Fox.svg.png" alt="Metamask" width='50px' loading="lazy" />
                                    <span className="mx-2 h5">Metamask</span>
                                </button>
                                <button type="button" className="d-flex align-items-center btn btn-outline-secondary w-100 my-2" data-mdb-ripple-color="dark">
                                    <img src="https://trustwallet.com/assets/images/media/assets/TWT.png" alt="Metamask" width='50px' loading="lazy" />
                                    <span className="mx-2 h5">Trust Wallet</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-mdb-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Save changes</button>
                </div>
            </div>
        </div>
    </div>

</>
  )
}

export default Navbar