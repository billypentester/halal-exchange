import React, {useEffect} from 'react'
import Seo from './Utilities/Seo'

function Swap() {

  useEffect(() => {
    Seo({
      title: "Swap",
      description: "Swap page",
    })
  }, []);

  return (
    <div className="d-flex justify-content-center flex-column align-items-center" style={{height:'100vh'}}>
       <div className="my-5 text-center col-4 d-flex flex-column">
        <ul className="nav nav-tabs justify-content-evenly rounded-2 bg-light" id="myTab0" role="tablist">
          <li className="nav-item" role="presentation">
            <button
              className="nav-link active"
              id="home-tab0"
              data-mdb-toggle="tab"
              data-mdb-target="#home0"
              type="button"
              role="tab"
              aria-controls="home"
              aria-selected="true"
            >
            <i className="fa-solid fa-arrows-rotate me-2"></i>
              Swap
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="profile-tab0"
              data-mdb-toggle="tab"
              data-mdb-target="#profile0"
              type="button"
              role="tab"
              aria-controls="profile"
              aria-selected="false"
            >
              <i className="fa-solid fa-dollar-sign me-2"></i>
              Buy/Sell
            </button>
          </li>
        </ul>
        <div className="tab-content bg-light d-flex flex-column text-start p-2" id="myTabContent0">
          <div
            className="tab-pane fade show active"
            id="home0"
            role="tabpanel"
            aria-labelledby="home-tab0"
          >
            <h5 className="mx-5 my-3">You sent</h5>
            <div className="d-flex mx-5 p-2">
              <input type="text" id="form12" className="form-control form-control-lg border-0 px-4 rounded-pill shadow-3-strong mx-3" placeholder='0.0' />
              <div className="dropdown mx-2 ">
                <button
                  className="btn btn-primary dropdown-toggle rounded-pill"
                  type="button"
                  id="dropdownMenuButton"
                  data-mdb-toggle="dropdown"
                  aria-expanded="false"
                >
                  ETH
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <li><a className="dropdown-item" href="#">DAI</a></li>
                  <li><a className="dropdown-item" href="#">USDC</a></li>
                  <li><a className="dropdown-item" href="#">WETH</a></li>
                </ul>
              </div>
            </div>
            <h5 className="mx-5 my-3">You get</h5>
            <div className="d-flex mx-5 p-2">
              <input type="text" id="form12" className="form-control form-control-lg border-0 px-4 rounded-pill shadow-3-strong mx-3" placeholder='0.0' />
              <div className="dropdown mx-2">
                <button
                  className="btn btn-primary dropdown-toggle rounded-pill"
                  type="button"
                  id="dropdownMenuButton"
                  data-mdb-toggle="dropdown"
                  aria-expanded="false"
                >
                  ETH
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <li><a className="dropdown-item" href="#">DAI</a></li>
                  <li><a className="dropdown-item" href="#">USDC</a></li>
                  <li><a className="dropdown-item" href="#">WETH</a></li>
                </ul>
              </div>
            </div>
            <button type="button" className="btn btn-lg btn-primary rounded-pill my-5 d-block w-75 mx-auto">Swap</button>
          </div>
          <div className="tab-pane fade" id="profile0" role="tabpanel" aria-labelledby="profile-tab0">
          <h5 className="mx-5 my-3">You sent</h5>
            <div className="d-flex mx-4 p-2">
              <input type="text" id="form12" className="form-control form-control-lg border-0 px-4 rounded-pill shadow-3-strong mx-3" placeholder='0.0' />
              <div className="dropdown mx-3 ">
                <button
                  className="btn btn-primary dropdown-toggle rounded-pill"
                  type="button"
                  id="dropdownMenuButton"
                  data-mdb-toggle="dropdown"
                  aria-expanded="false"
                >
                  ETH
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <li><a className="dropdown-item" href="#">DAI</a></li>
                  <li><a className="dropdown-item" href="#">USDC</a></li>
                  <li><a className="dropdown-item" href="#">WETH</a></li>
                </ul>
              </div>
            </div>
            <h5 className="mx-5 my-3">You get</h5>
            <div className="d-flex mx-4 p-2">
              <input type="text" id="form12" className="form-control form-control-lg border-0 px-4 rounded-pill shadow-3-strong mx-3" placeholder='0.0' />
              <div className="dropdown mx-3">
                <button
                  className="btn btn-primary dropdown-toggle rounded-pill"
                  type="button"
                  id="dropdownMenuButton"
                  data-mdb-toggle="dropdown"
                  aria-expanded="false"
                >
                  ETH
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <li><a className="dropdown-item" href="#">DAI</a></li>
                  <li><a className="dropdown-item" href="#">USDC</a></li>
                  <li><a className="dropdown-item" href="#">WETH</a></li>
                </ul>
              </div>
            </div>
            <button type="button" className="btn btn-lg btn-primary rounded-pill my-5 d-block w-75 mx-auto">Swap</button>
          </div>
        </div>
      </div>
    </div>
   
  )
}

export default Swap