import Seo from './Utilities/Seo'
import React, {useState, useEffect, useContext} from 'react'
import { Token1Context } from "../contexts/Token1Context";

function Swap() {
  const {
    Swap,
    connectWallet,
    walletAddress,
    findPool,
    quoter,
    estimatedValue,
    setEstimatedValue,
    estimatedValue1,
    setEstimatedValue1,
  } = useContext(Token1Context);
  const [r1, setR1] = useState(0.1); //larger number (ending val)
  // const [r2, setR2] = useState(0); //smaller number(starting val)
  const [show, setshow] = useState(false);

  const [token1, setToken1] = useState();
  const [boolean, setBoolean] = useState(true);
  const [check, setCheck] = useState();
  const [slippageVal, setSlippageVal] = useState(0);
  const [pooltoken1, setPooltoken1]= useState();
  const [pooltoken2, setPooltoken2]= useState();
  const [fee, setFee]= useState();

  useEffect(() => {
    Seo({
      title: "Swap",
      description: "Swap page",
    })
  }, []);

  return (
    <div className="d-flex justify-content-center flex-column align-items-center" style={{height:'100vh'}}>
      <div class="card text-center shadow-lg col-md-6 col-lg-4 rounded-0 border border-end-0 border-start-0 border-top-0 border-3 border-primary">
        <h5 class="card-header h4">Swap</h5>
        <div class="card-body">
          <div className="my-2">
            <h5 class="card-title text-start mx-4 p-2">You send</h5>
            <div className="d-flex mx-4 p-2">
              <input type="text" id="form12" className="form-control form-control-lg border-0 px-4 rounded-pill shadow-3-strong mx-3" placeholder='0.0'
               type="number"
               color="white"
               value={estimatedValue1}
              
               onChange={(e) => {
                 setToken1(e.target.value);
                 setEstimatedValue1(e.target.value);
                 quoter(e.target.value,1);
               }}
              />
              <div className="dropdown mx-2 ">
                <button
                  className="btn btn-lg btn-primary dropdown-toggle rounded-pill"
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
            <div className="">
                <input type="text" onChange={(e)=>{setPooltoken1(e.target.value)}} />
                <input type="text" onChange={(e)=>{setPooltoken2(e.target.value)}} />
                <input type="text" onChange={(e)=>{setFee(e.target.value)}} />
              </div>
          </div>
          <div className='my-2'>
          <h5 class="card-title text-start mx-4 p-2">You get</h5>
          <div className="d-flex mx-4 p-2">
            <input type="text" id="form12" className="form-control form-control-lg border-0 px-4 rounded-pill shadow-3-strong mx-3" placeholder='0.0'  value={estimatedValue} 
                  onChange={(e) => {
                    setToken1(e.target.value);
                    setEstimatedValue(e.target.value);
                    quoter(e.target.value, 2);

                  }}></input>
            <div className="dropdown mx-2 ">
              <button
                className="btn btn-lg btn-primary dropdown-toggle rounded-pill"
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
          {walletAddress.length > 0 ? (
              <>
                {console.log(boolean, r1)}
          <button 
          type="button" 
          class="btn btn-lg btn-primary w-75 my-4 rounded-pill"
          onClick={() => {
            Swap(token1, boolean, r1);
          }}
        
          > <span> Swap </span></button>
          </>
            ) : (
              <>
                <button
                  type="button" 
                  class="btn btn-lg btn-primary w-75 my-4 rounded-pill"
                  
                  onClick={() => {
                    connectWallet();
                  }}
                >
                  <span>CONNECT WALLET</span>
                </button>
              </>
            )}
        </div>
      </div>
    </div>
  )
}

export default Swap