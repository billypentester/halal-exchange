import React from 'react'
import tokens from '../../data/tokens.js'
import { useNavigate } from 'react-router-dom';

function Tokens() {

  const navigate = useNavigate();

  const handleRowClick = (e) => {
    const id = e.currentTarget.id;
    console.log(id);
    navigate(`/tokens/stats/${id}`);
  }

  return (
    <div className="container" style={{ marginTop:'4rem' }}>

      <div className="py-5 text-center">
        <h1 className="display-6">Trending Tokens</h1>
      </div>

      <div className="d-flex justify-content-between align-items-center">

        <div className="col-3">
          <div className="input-group">
            <div className="form-outline">
              <input type="filter tokens" id="form1" className="form-control bg-light" />
              <label className="form-label" for="form1">Filter Tokens</label>
            </div>
            <button type="button" className="btn btn-primary">
              <i className="fas fa-search"></i>
            </button>
          </div>
        </div>

        <div className="d-flex">

          <div className="dropdown mx-1">
            <button className="btn btn-outline-primary dropdown-toggle" type="button" id="dropdownMenuButton" data-mdb-toggle="dropdown" aria-expanded="false">
              1Y
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <li><a className="dropdown-item" href="#">1M</a></li>
              <li><a className="dropdown-item" href="#">1W</a></li>
              <li selected><a className="dropdown-item" href="#">1D</a></li>
              <li><a className="dropdown-item" href="#">1H</a></li>
            </ul>
          </div>

          <div className="dropdown mx-1">
            <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton" data-mdb-toggle="dropdown" aria-expanded="false">
              Ethereum
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <li><a className="dropdown-item">Polygon</a></li>
              <li><a className="dropdown-item">Optimism</a></li>
              <li><a className="dropdown-item">Arbitrum</a></li>
            </ul>
          </div>

        </div>

      </div>

      <table className="table my-5 table-hover align-middle">
        <thead className="table-light">
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
                <tr key={token.id} id={token.id} style={{ cursor:'pointer' }} onClick={handleRowClick}>
                  <th scope="row">{token.id}</th>
                  <td>
                    <div className="d-flex align-items-center">
                      <img style={{ width: '40px', height: '40px' }} className="rounded-circle m-1" src={token.image} alt="token" />
                      <span className="m-1 h6">{token.name}</span>
                      <span className="m-1">{token.token}</span>
                    </div>  
                  </td>
                  <td className="h6">{token.price}</td>
                  <td className="h6">{token.change}</td>
                  <td className="h6">{token.marketGap}</td>
                  <td>                   
                    <button type="button" className="btn btn-primary">{token.action}</button>
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