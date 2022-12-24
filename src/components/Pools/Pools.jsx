import React from 'react'

import topPools from './../../images/topPools.png'
import checkLiquidity from './../../images/checkLiquidity.png'
import createPool from './../../images/createPool.png'

import { Link } from 'react-router-dom'

function Pools() {
  return (
    <div class="container" style={{ marginTop:'4rem' }}>

      <div class="py-5 text-center">
        <h1 class="display-6">Pools</h1>
      </div>

      <div class="d-flex mb-5 justify-content-evenly">

        <div class="card text-center shadow-lg col-3">
          <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="primary">
            <img src={createPool} class="img-fluid" />
            <a href="#!">
              <div class="mask" style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
            </a>
          </div>
          <div class="card-body bg-primary text-white">
            <h5 class="card-title">Create Pool</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </p>
            <button type="button" class="btn btn-lg btn-outline-white">New Position</button>
          </div>
        </div>

        <div class="card text-center shadow-lg col-3">
          <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="primary">
            <img src={checkLiquidity} class="img-fluid" />
            <a href="#!">
              <div class="mask" style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
            </a>
          </div>
          <div class="card-body bg-primary text-white">
            <h5 class="card-title">Check Liquidity</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </p>
            <button type="button" class="btn btn-lg btn-outline-white">Connect to Wallet</button>
          </div>
        </div>

        <div class="card text-center shadow-lg col-3">
          <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="primary">
            <img src={topPools} class="img-fluid" />
            <Link to="/pools/top">
              <div class="mask" style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
            </Link>
          </div>
          <div class="card-body bg-primary text-white">
            <h5 class="card-title">Top Pools</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </p>
            <Link to="/pools/top">
              <button type="button" class="btn btn-lg btn-outline-white">Check Pools</button>
            </Link>
          </div>
        </div>
        
      </div>

    </div>
  )
}

export default Pools