import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

import pools from './../../data/pools'

function TopPools() {

  

  const navigate = useNavigate();

  const handleRowClick = (e) => {
    const id = e.currentTarget.id;
    console.log(id);
    navigate(`/pools/stats/${id}`);
  }

  return (
    <div class="container" style={{ marginTop:'4rem' }}>

      <div className="py-5 text-center">
        <h1 className="display-6 ">Top Pools</h1>
      </div>

      <table class="table mb-5 table-hover align-middle">
        <thead class="table-light">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Pool</th>
            <th scope="col">MarketGap</th>
            <th scope="col">Volume 24H</th>
            <th scope="col">Volume 7D</th>
          </tr>
        </thead>
        <tbody>
          {
            pools.map((pool) => (
              <tr key={pool.id} id={pool.id} style={{ cursor:'pointer' }} onClick={handleRowClick}>
                <th scope="row">{pool.id}</th>
                <td>
                  <div class="d-flex align-items-center">
                    <div class="m-1">
                      <img style={{ width: '40px', height: '40px' }} class="rounded-circle " src={pool.tokensPicture[0].picture} alt="pool" />
                      <img style={{ width: '40px', height: '40px' }} class="rounded-circle " src={pool.tokensPicture[1].picture} alt="pool" />
                    </div>
                    <span class="m-1 h6">{pool.name}</span>
                    <span class="m-1 bg-light p-1 rounded-3">{pool.fee}%</span>
                  </div>  
                </td>
                <td class="h6">{pool.marketGap}</td>
                <td class="h6">{pool.volume24H}</td>
                <td class="h6">{pool.volume7D}</td>             
              </tr>
            ))
          }
        </tbody>
      </table>

      <div class="d-flex justify-content-center my-5">
        <nav aria-label="...">
          <ul class="pagination pagination-circle">
            <li class="page-item mx-1">
              <a class="page-link">Previous</a>
            </li>
            <li class="page-item mx-1"><a class="page-link" href="#">1</a></li>
            <li class="page-item mx-1 active" aria-current="page">
              <a class="page-link" href="#">2 <span class="visually-hidden">(current)</span></a>
            </li>
            <li class="page-item mx-1"><a class="page-link" href="#">3</a></li>
            <li class="page-item mx-1"><a class="page-link" href="#">4</a></li>
            <li class="page-item mx-1"><a class="page-link" href="#">5</a></li>
            <li class="page-item mx-1">
              <a class="page-link" href="#">Next</a>
            </li>
          </ul>
        </nav>
      </div>

    </div>
  )
}

export default TopPools