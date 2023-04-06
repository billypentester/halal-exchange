import React, {useEffect} from 'react'
import { useParams } from 'react-router-dom'
import tokens from '../../data/tokens'
import { Link } from 'react-router-dom'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function TokenStats() {

  const options = {
    responsive: true,
    labels: {
      fontColor: '#fff',
      display: false,
    },
    scales: {
      y: {
        display:false,
      }
    }
  };

  const labels = ['1:00 AM', '5:00 AM', '9:00 AM', '1:00 PM', '5:00 PM', '9:00 PM'];

  const data = {
    labels,
    datasets: [
      {
        label: 'value',
        data:[1208, 1190, 1195, 1195, 1204, 1196, 1212, 1208, 1211, 1200, 1204, 1197, 1206, 1202, 1195, 1212, 1211, 1205, 1204, 1195, 1208, 1197, 1191, 1209, 1212, 1193, 1192, 1197, 1195, 1206, 1194, 1198, 1194, 1201, 1204, 1205, 1205, 1196, 1211, 1190, 1208, 1211, 1205, 1193, 1210, 1194, 1199, 1203, 1212, 1209, 1194, 1191, 1195, 1207, 1194, 1203, 1207, 1202, 1198, 1203, 1195, 1198, 1194, 1203, 1196, 1210, 1211, 1206, 1195, 1197, 1194, 1208, 1190, 1193, 1211, 1198, 1190, 1191, 1209, 1196, 1193, 1206, 1192, 1206, 1204, 1193, 1194, 1197, 1192, 1202, 1205, 1192, 1197, 1205, 1192, 1207, 1210, 1191, 1209, 1194, 1200, 1209, 1203, 1212, 1195, 1190, 1193, 1201, 1196, 1207, 1204, 1205, 1199, 1210, 1193, 1209, 1210, 1206, 1192, 1206, 1199, 1199, 1207, 1210, 1212, 1193, 1208, 1209, 1192, 1194, 1191, 1205, 1210, 1207, 1212, 1195, 1192, 1201, 1207, 1194, 1198, 1199, 1204, 1200],
        borderColor: '#3b71ca',
        backgroundColor: '#3b71ca',
        fill: false,
        lineTension: 0.5,
      },

    ],
  };
  
  const { id } = useParams();

  const [tokenStat, setTokenStat] = React.useState('');

  useEffect(() => {
    const token = tokens.filter((token) => token.id == id);
    setTokenStat(token[0]);
  },[id])

  return (
    <div style={{ marginTop:'4rem' }}>

      <div className="bg-light shadow-2-strong">
        <div className="p-5 container h-25">
          <div className="d-flex justify-content-between">
            <div className="d-flex align-items-center">
              <img src={tokenStat.image} alt={tokenStat.name} className="img-fluid mx-3" style={{ width:'50px' }} />
              <h1 className="m-0">{tokenStat.name}</h1>
            </div>
            <div>
              <button className="btn btn-lg btn-primary mx-3">
                <Link to={`/swap`} className="text-decoration-none text-light">Swap {tokenStat.name}</Link>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container d-flex my-4 justify-content-center">

        <div className="me-4 d-flex align-content-center flex-column justify-content-center">
          <div className="bg-light text-center rounded-pill shadow-4-strong px-1 py-2">
            <h5 className="p-1 bg-primary rounded-pill text-white">1D</h5>
            <h5 className="p-1">1W</h5>
            <h5 className="p-1">1M</h5>
            <h5 className="p-1">1Y</h5>
          </div>
        </div>

        <div className="col-7 bg-light rounded-3 p-3 mx-2 shadow-4-strong">
          <Line options={options} data={data} />
        </div>

        <div className="col-4 rounded-3 mx-2">

          <div className='d-flex flex-column text-end p-3 rounded-3 bg-light shadow-4-strong'>
            <h1>{tokenStat.price}</h1>
            <span className="text-success h4">+{tokenStat.change}</span>
          </div>

          <div className="d-flex justify-content-center align-items-center my-3 rounded-3 flex-wrap">

            <div className='col-5 bg-primary m-3 p-3 box rounded-2 text-light shadow-4-strong'>
              <div className='d-flex flex-column text-center'>
                <h3>$ 808.8M</h3>
                <span>TVL</span>
              </div>
            </div>

            <div className='col-5 bg-primary m-3 p-3 box rounded-2 text-light shadow-4-strong'>
              <div className='d-flex flex-column text-center'>
                <h3>$ 325.7M</h3>
                <span>24H volume</span>
              </div>
            </div>

            <div className='col-5 bg-primary m-3 p-3 box rounded-2 text-light shadow-4-strong'>
              <div className='d-flex flex-column text-center'>
                <h3>$ 878.41</h3>
                <span>52W low</span>
              </div>
            </div>
            
            <div className='col-5 bg-primary m-3 p-3 box rounded-2 text-light shadow-4-strong'>
              <div className='d-flex flex-column text-center'>
                <h3>$ 3.9K</h3>
                <span>52W high</span>
              </div>
            </div>

          </div>

        </div>

      </div>

      <div className="container m-5 col-8">
          <h2>Description</h2>
          <p className="p-3">
            USD Coin (USDC) is a stablecoin that is pegged to the US dollar, meaning that its value is designed to be equivalent to one US dollar. It is an ERC-20 token built on the Ethereum blockchain, but it can also be issued on other blockchain networks, such as Algorand and Solana. USDC is one of the most popular stablecoins and is widely used in decentralized finance (DeFi) applications, as well as for trading on cryptocurrency exchanges.
            USDC is backed by reserves of US dollars held in custody by regulated financial institutions, which are audited regularly to ensure transparency and accountability.<br/> This makes USDC a trustworthy and reliable stablecoin, as it is fully collateralized by a reserve of assets that can be redeemed at any time. Moreover, USDC transactions are fast, cheap, and secure, as they can be settled on the Ethereum blockchain in a matter of seconds and are subject to the same level of security as other Ethereum-based tokens.
            Overall, USDC is a stable and convenient cryptocurrency that can be used for a variety of purposes, from making payments and remittances to trading and investing in DeFi protocols. Its stability and transparency make it an attractive alternative to traditional payment methods and other cryptocurrencies that are subject to price volatility.
          </p>
      </div>

    </div>
  )
}

export default TokenStats