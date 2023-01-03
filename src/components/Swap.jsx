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
      <div class="card text-center shadow-lg col-4 rounded-0 border border-end-0 border-start-0 border-top-0 border-3 border-primary">
        <h5 class="card-header h4">Swap</h5>
        <div class="card-body">
          <div className="my-2">
            <h5 class="card-title text-start mx-4 p-2">You get</h5>
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
          </div>
          <div className='my-2'>
          <h5 class="card-title text-start mx-4 p-2">You Send</h5>
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
          </div>
          <button type="button" class="btn btn-lg btn-primary w-75 my-4 rounded-pill">Swap</button>
        </div>
      </div>
    </div>
  )
}

export default Swap