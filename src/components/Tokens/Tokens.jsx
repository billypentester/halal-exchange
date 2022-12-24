import React from 'react'
import tokens from '../../data/tokens.js'
import { useNavigate } from 'react-router-dom';

function Tokens() {

  const navigate = useNavigate();

  const handleRowClick = () => {
    navigate('/tokens/statistics');
  }

  return (
    <div class="container" style={{ marginTop:'4rem' }}>

      <div class="py-5 text-center">
        <h1 class="display-6 ">Trending Tokens</h1>
      </div>

      <div class="d-flex justify-content-between align-items-center">

        <div class="col-3">
          <div class="input-group">
            <div class="form-outline">
              <input type="filter tokens" id="form1" class="form-control bg-light" />
              <label class="form-label" for="form1">Filter Tokens</label>
            </div>
            <button type="button" class="btn btn-primary">
              <i class="fas fa-search"></i>
            </button>
          </div>
        </div>

        <div class="d-flex">

          <div class="dropdown mx-1">
            <button class="btn btn-outline-primary dropdown-toggle" type="button" id="dropdownMenuButton" data-mdb-toggle="dropdown" aria-expanded="false">
              1Y
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <li><a class="dropdown-item" href="#">1M</a></li>
              <li><a class="dropdown-item" href="#">1W</a></li>
              <li selected><a class="dropdown-item" href="#">1D</a></li>
              <li><a class="dropdown-item" href="#">1H</a></li>
            </ul>
          </div>

          <div class="dropdown mx-1">
            <button class="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton" data-mdb-toggle="dropdown" aria-expanded="false">
              Ethereum
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <li><a class="dropdown-item">Polygon</a></li>
              <li><a class="dropdown-item">Optimism</a></li>
              <li><a class="dropdown-item">Arbitrum</a></li>
            </ul>
          </div>

        </div>

      </div>

      <table class="table my-5 table-hover align-middle">
        <thead class="table-light">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Token Name</th>
            <th scope="col">Price</th>
            <th scope="col">Change</th>
            <th scope="col">Market Gap</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
            {
              tokens.map((token) => (
                <tr key={token.id} style={{ cursor:'pointer' }} onClick={handleRowClick}>
                  <th scope="row">{token.id}</th>
                  <td>
                    <div class="d-flex align-items-center">
                      <img style={{ width: '40px', height: '40px' }} class="rounded-circle m-1" src={token.image} alt="token" />
                      <span class="m-1 h6">{token.name}</span>
                      <span class="m-1">{token.token}</span>
                    </div>  
                  </td>
                  <td class="h6">{token.price}</td>
                  <td class="h6">{token.change}</td>
                  <td class="h6">{token.marketGap}</td>
                  <td>                   
                    <button type="button" class="btn btn-primary">{token.action}</button>
                  </td>               
                </tr>
              ))
            }
        </tbody>
      </table>

    </div>
  )
}

export default Tokens