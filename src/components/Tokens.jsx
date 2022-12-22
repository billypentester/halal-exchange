import React from 'react'

function Tokens() {

  const tokens = [
    {
      id: 1,
      name: 'Ether ETH',
      price: '$1,209.98',
      change: '0.02%',
      marketGap: '$1,209.98',
      action: 'Buy'
    },
    {
      id: 2,
      name: 'Ether ETH',
      price: '$1,209.98',
      change: '0.02%',
      marketGap: '$1,209.98',
      action: 'Buy'
    },
    {
      id: 3,
      name: 'Ether ETH',
      price: '$1,209.98',
      change: '0.02%',
      marketGap: '$1,209.98',
      action: 'Buy'
    },
    {
      id: 4,
      name: 'Ether ETH',
      price: '$1,209.98',
      change: '0.02%',
      marketGap: '$1,209.98',
      action: 'Buy'
    },
    {
      id: 5,
      name: 'Ether ETH',
      price: '$1,209.98',
      change: '0.02%',
      marketGap: '$1,209.98',
      action: 'Buy'
    },
    {
      id: 6,
      name: 'Ether ETH',
      price: '$1,209.98',
      change: '0.02%',
      marketGap: '$1,209.98',
      action: 'Buy'
    },
    {
      id: 7,
      name: 'Ether ETH',
      price: '$1,209.98',
      change: '0.02%',
      marketGap: '$1,209.98',
      action: 'Buy'
    },
    {
      id: 8,
      name: 'Ether ETH',
      price: '$1,209.98',
      change: '0.02%',
      marketGap: '$1,209.98',
      action: 'Buy'
    },
    {
      id: 9,
      name: 'Ether ETH',
      price: '$1,209.98',
      change: '0.02%',
      marketGap: '$1,209.98',
      action: 'Buy'
    },
    {
      id: 10,
      name: 'Ether ETH',
      price: '$1,209.98',
      change: '0.02%',
      marketGap: '$1,209.98',
      action: 'Buy'
    },
  ]

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
              coins
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <li><a class="dropdown-item">Ethererum</a></li>
              <li><a class="dropdown-item">Bitcoin</a></li>
              <li><a class="dropdown-item">Polygon</a></li>
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
                <tr key={token.id}>
                  <th scope="row">{token.id}</th>
                  <td>
                    <div class="d-flex align-items-center">
                      <img style={{ width: '40px', height: '40px' }} class="rounded-circle m-1" src="https://cloudfront-us-east-1.images.arcpublishing.com/coindesk/ZJZZK5B2ZNF25LYQHMUTBTOMLU.png" alt="token" />
                      <span class="m-1 h6">{token.name}</span>
                    </div>
                  </td>
                  <td>{token.price}</td>
                  <td>{token.change}</td>
                  <td>{token.marketGap}</td>
                  <td>
                    <button type="button" class="btn btn-primary">{token.action}</button>
                  </td>
                </tr>
              ))
            }
        </tbody>
      </table>

      <div>

      </div>
    </div>
  )
}

export default Tokens