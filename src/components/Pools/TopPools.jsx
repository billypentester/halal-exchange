import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function TopPools() {

  const pools = [
    {
      id: 1,
      name: "DAI/USDC",
      fee: 0.01,
      volume24H: '$235.70M',
      marketGap:'$807.1M',
      volume7D: '26.42M',
      tokensPicture: [
        {
          id: 1,
          name: "DAI",
          picture: "https://raw.githubusercontent.com/uniswap/assets/master/blockchains/ethereum/assets/0x6B175474E89094C44Da98b954EedeAC495271d0F/logo.png"
        },
        {
          id: 2,
          name: "USDC",
          picture: "https://raw.githubusercontent.com/uniswap/assets/master/blockchains/ethereum/assets/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48/logo.png"
        }
      ]
    },
    {
        id: 2,
        name: "DAI/USDC",
        fee: 0.01,
        volume24H: '$235.70M',
        marketGap:'$807.1M',
        volume7D: '26.42M',
        tokensPicture: [
            {
                id: 1,
                name: "DAI",
                picture: "https://raw.githubusercontent.com/uniswap/assets/master/blockchains/ethereum/assets/0x6B175474E89094C44Da98b954EedeAC495271d0F/logo.png"
            },
            {
                id: 2,
                name: "USDC",
                picture: "https://raw.githubusercontent.com/uniswap/assets/master/blockchains/ethereum/assets/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48/logo.png"
            }
        ]
    },
    {
        id: 3,
        name: "DAI/USDC",
        fee: 0.01,
        volume24H: '$235.70M',
        marketGap:'$807.1M',
        volume7D: '26.42M',
        tokensPicture: [
            {
                id: 1,
                name: "DAI",
                picture: "https://raw.githubusercontent.com/uniswap/assets/master/blockchains/ethereum/assets/0x6B175474E89094C44Da98b954EedeAC495271d0F/logo.png"
            },
            {
                id: 2,
                name: "USDC",
                picture: "https://raw.githubusercontent.com/uniswap/assets/master/blockchains/ethereum/assets/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48/logo.png"
            }
        ]
    },
    {
        id: 4,
        name: "DAI/USDC",
        fee: 0.01,
        volume24H: '$235.70M',
        marketGap:'$807.1M',
        volume7D: '26.42M',
        tokensPicture: [
            {
                id: 1,
                name: "DAI",
                picture: "https://raw.githubusercontent.com/uniswap/assets/master/blockchains/ethereum/assets/0x6B175474E89094C44Da98b954EedeAC495271d0F/logo.png"
            },
            {
                id: 2,
                name: "USDC",
                picture: "https://raw.githubusercontent.com/uniswap/assets/master/blockchains/ethereum/assets/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48/logo.png"
            }
        ]
    },
    {
        id: 5,
        name: "DAI/USDC",
        fee: 0.01,
        volume24H: '$235.70M',
        marketGap:'$807.1M',
        volume7D: '26.42M',
        tokensPicture: [
            {
                id: 1,
                name: "DAI",
                picture: "https://raw.githubusercontent.com/uniswap/assets/master/blockchains/ethereum/assets/0x6B175474E89094C44Da98b954EedeAC495271d0F/logo.png"
            },
            {
                id: 2,
                name: "USDC",
                picture: "https://raw.githubusercontent.com/uniswap/assets/master/blockchains/ethereum/assets/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48/logo.png"
            }
        ]
    },
    {
        id: 6,
        name: "DAI/USDC",
        fee: 0.01,
        volume24H: '$235.70M',
        marketGap:'$807.1M',
        volume7D: '26.42M',
        tokensPicture: [
            {
                id: 1,
                name: "DAI",
                picture: "https://raw.githubusercontent.com/uniswap/assets/master/blockchains/ethereum/assets/0x6B175474E89094C44Da98b954EedeAC495271d0F/logo.png"
            },
            {
                id: 2,
                name: "USDC",
                picture: "https://raw.githubusercontent.com/uniswap/assets/master/blockchains/ethereum/assets/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48/logo.png"
            }
        ]
    },
    {
        id: 7,
        name: "DAI/USDC",
        fee: 0.01,
        volume24H: '$235.70M',
        marketGap:'$807.1M',
        volume7D: '26.42M',
        tokensPicture: [
            {
                id: 1,
                name: "DAI",
                picture: "https://raw.githubusercontent.com/uniswap/assets/master/blockchains/ethereum/assets/0x6B175474E89094C44Da98b954EedeAC495271d0F/logo.png"
            },
            {
                id: 2,
                name: "USDC",
                picture: "https://raw.githubusercontent.com/uniswap/assets/master/blockchains/ethereum/assets/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48/logo.png"
            }
        ]
    },
    {
        id: 8,
        name: "DAI/USDC",
        fee: 0.01,
        volume24H: '$235.70M',
        marketGap:'$807.1M',
        volume7D: '26.42M',
        tokensPicture: [
            {
                id: 1,
                name: "DAI",
                picture: "https://raw.githubusercontent.com/uniswap/assets/master/blockchains/ethereum/assets/0x6B175474E89094C44Da98b954EedeAC495271d0F/logo.png"
            },
            {
                id: 2,
                name: "USDC",
                picture: "https://raw.githubusercontent.com/uniswap/assets/master/blockchains/ethereum/assets/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48/logo.png"
            }
        ]
    },
    {
        id: 9,
        name: "DAI/USDC",
        fee: 0.01,
        volume24H: '$235.70M',
        marketGap:'$807.1M',
        volume7D: '26.42M',
        tokensPicture: [
            {
                id: 1,
                name: "DAI",
                picture: "https://raw.githubusercontent.com/uniswap/assets/master/blockchains/ethereum/assets/0x6B175474E89094C44Da98b954EedeAC495271d0F/logo.png"
            },
            {
                id: 2,
                name: "USDC",
                picture: "https://raw.githubusercontent.com/uniswap/assets/master/blockchains/ethereum/assets/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48/logo.png"
            }
        ]
    },
    {
        id: 10,
        name: "DAI/USDC",
        fee: 0.01,
        volume24H: '$235.70M',
        marketGap:'$807.1M',
        volume7D: '26.42M',
        tokensPicture: [
            {
                id: 1,
                name: "DAI",
                picture: "https://raw.githubusercontent.com/uniswap/assets/master/blockchains/ethereum/assets/0x6B175474E89094C44Da98b954EedeAC495271d0F/logo.png"
            },
            {
                id: 2,
                name: "USDC",
                picture: "https://raw.githubusercontent.com/uniswap/assets/master/blockchains/ethereum/assets/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48/logo.png"
            }
        ]
    }
  ]

  const navigate = useNavigate();

  const handleRowClick = () => {
    navigate('/pools/statistics');
  }

  return (
    <div class="container" style={{ marginTop:'4rem' }}>

      <div class="p-5 bg-light">
        <h1 class="">All Pools</h1>
        <nav class="d-flex">
          <h6 class="mb-0">
            <Link to="/pools" class="text-reset">Pools</Link>
            <span> / </span>
            <Link to="/pools/top" class="text-reset text-decoration-underline">Top Pools</Link>
          </h6>
        </nav>
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
              <tr key={pool.id} style={{ cursor:'pointer' }} onClick={handleRowClick}>
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