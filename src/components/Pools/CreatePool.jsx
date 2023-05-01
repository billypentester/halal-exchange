
import './../../index.css'
import React, {useState, useEffect, useContext} from 'react'
import { Token1Context } from "../../contexts/Token1Context";

function CreatePool() {

  const {
    
    connectWallet,
    walletAddress,
    getPrice,
    takeDepositAmount,
    price,
    setPrice,
    AddLiquidityProfessionally,
    currentPrice,
    getPriceOnClick,
    intializedVar,
    maxPrice, 
    setMaxPrice,
    minPrice, 
    setMinPrice,
    initializePool,
    approveTokens


  } = useContext(Token1Context);

  const [position, setPosition] = useState({ x: 25});
  const [isDragging, setIsDragging] = useState(false);
  const [token0, setToken0] = useState();
  const [token1, setToken1] = useState();
  const [fee, setFee] = useState();
  const [pRatio, setPRatio ]= useState(1);
  
  const [token0Amount, setToken0Amount]=useState()
  const [token1Amount, setToken1Amount]=useState()

  const handleMouseDown = (event) => {
    setIsDragging(true);
  };

  const handleMouseMove = (event) => {
    if (isDragging && event.target.tagName === 'circle') {
      if(position.x + event.movementX < 25){
        setPosition({ x: 25 });
      }
      else if(position.x + event.movementX > 475){
        setPosition({ x: 475 });
      }
      else{
        const tranformX = `translateX(${position.x + event.movementX}px)`
        event.target.style.transform = tranformX;
        setPosition({ x: position.x + event.movementX });
      }
    }
  };

  const handleMouseUp = (event) => {
    setIsDragging(false);
  };

  const handleMouseLeave = (event) => {
    setIsDragging(false);
  };
async function priceFunctiion(){
  if(token0 && token1 && fee){
   await getPriceOnClick(token0, token1, fee)
   return token0,token1,fee
  }

}
useEffect(()=>{
  priceFunctiion()

},[token0,token1,fee])
  return (
    
    <div class="container" style={{ marginTop:'7rem'}}>

      <div className="d-flex justify-content-center align-items-center py-5">

        <div class="card text-center shadow-lg col-md-6 col-lg-10 rounded-0 border border-end-0 border-start-0 border-top-0 border-3 border-primary">
          <h5 class="card-header h4">Add Liquidity</h5>
          <div class="card-body row">

            <div className="d-flex flex-column col-6">

              <div className="my-1">
                <h5 class="card-title text-start mx-4 p-2">Token Name</h5>
                <div className="d-flex mx-4 p-2">
                  <input type="text" id="form12" className="form-control form-control-lg border-0 px-4 rounded-pill shadow-3-strong mx-2" placeholder='Ex: "0x000000000000000"' onChange={(e)=>{
                    setToken0(e.target.value)
                    console.log(token0)
                    // priceFunctiion()
                  }} />
                  <input type="text" id="form12" className="form-control form-control-lg border-0 px-4 rounded-pill shadow-3-strong mx-2" placeholder='Ex: "0x000000000000000"' onChange={(e)=>{
                    setToken1(e.target.value)
                    console.log(token1)
                    // priceFunctiion()
                  }} />
                </div>
              </div>
              
               
              <div className='my-1'>
                <h5 class="card-title text-start mx-4 p-2">Deposited Ammount</h5>
                <div className="d-flex flex-column mx-4 p-2">
                {intializedVar?<input type="text" id="form12" className="form-control form-control-lg border-0 px-4 rounded-pill shadow-3-strong my-2" placeholder='token0' type='number'  onChange={(e)=>{
                    setToken0Amount(e.target.value)
                    console.log(token0Amount)
                  }}/>:<input type="text" id="form12" className="form-control form-control-lg border-0 px-4 rounded-pill shadow-3-strong my-2" disabled placeholder='token0' type='number'  onChange={(e)=>{
                    setToken0Amount(e.target.value)
                    console.log(token0Amount)
                  }}/>}
                  
                  {intializedVar?<input type="text" id="form12" className="form-control form-control-lg border-0 px-4 rounded-pill shadow-3-strong my-2" placeholder='token1' type='number'  onChange={(e)=>{
                    setToken1Amount(e.target.value)
                    console.log(token1Amount)
                  }}/>:<input type="text" id="form12" className="form-control form-control-lg border-0 px-4 rounded-pill shadow-3-strong my-2" disabled placeholder='token1' type='number'  onChange={(e)=>{
                    setToken1Amount(e.target.value)
                    console.log("token1 amount set",token1Amount)
                  }}/>}
                </div>
              </div>

              <div className='my-1 col-6'>
                <h5 class="card-title text-start mx-4 p-2">Fees</h5>
                <div className="d-flex mx-4 p-2 col-6 boxedradio">
                  <div className="m-2">
                    <input className='form-control form-control-lg' type="radio" id="0.01" name="skills" value="0.01" onChange={(e) => {
                    setFee(500)
                    console.log(fee)
                    // priceFunctiion()
                    // getPriceOnClick(token0, token1, fee)
                  }}/>
                    <label for="0.01">500</label>
                  </div>
                  <div className="m-2">
                    <input className='form-control form-control-lg' type="radio" id="0.1" name="skills" value="0.1" onChange={(e) => {
                    setFee(3000)
                    console.log(fee)
                    // priceFunctiion()
                    // getPriceOnClick(token0, token1, fee)
                  }}/>
                    <label for="0.1">3000</label>
                  </div>
                  <div className="m-2">
                    <input className='form-control form-control-lg' type="radio" id="0.3" name="skills" value="0.3" onChange={(e) => {
                   setFee(10000)
                  //  getPriceOnClick(token0, token1, fee)
                  // priceFunctiion()
                   console.log(fee)
                  }}/>
                    <label for="0.3">10000</label>
                  </div>
                </div>
              </div>

            </div>

            <div className='d-flex flex-column col-6'>
            <a>{currentPrice}</a>
           
              <div className='my-1'>
                <h5 class="card-title text-start mx-4 p-2"></h5>
                <div className="d-flex flex-column mx-4 mb-3 px-4 bg-light h-100">
                  <svg class="range-svg" viewBox="0 0 500 100">
                    <rect class="range-track" x="25" y="45" width="450" height="10" rx="5" />
                    <circle draggable class="range-handle range-handle--left" cx={position.x} cy="50" r="12" onMouseDown={handleMouseDown} onMouseMove={handleMouseMove} onMouseUp={handleMouseUp} onMouseLeave={handleMouseLeave} />
                    <circle class="range-handle range-handle--right" cx="475" cy="50" r="12" />
                    <rect class="range-selection" x="25" y="45" width="450" height="10" rx="5" />
                  </svg>
                </div>
                
                  {intializedVar?<></>:<div className='col-5 bg-light rounded-3 text-white'>
                  <div>
                    <div className='my-2'>
                      <span className='text-dark'>price</span>
                    </div>
                    <div className='d-flex align-items-center justify-content-between my-2'>
                      <button className='btn btn-secondary p-2 mx-2' onClick={(e)=>{setPRatio(pRatio-1)}} >
                        <i class="fa-solid fa-minus d-inline" ></i>
                      </button>
                      <h5 className='d-inline h-4 m-0 text-dark'>{pRatio}</h5>
                      <button className='btn btn-secondary p-2 mx-2' onClick={(e)=>{setPRatio(pRatio+1)}}>
                        <i class="fa-solid fa-plus d-inline"></i>
                      </button>
                    </div>
                  </div>
                </div>}
                
                {intializedVar?
                <div className="d-flex mx-4 p-2 justify-content-around">
                
                  
                  <div className='col-5 bg-light rounded-3 text-white'>
                    <div className='my-2'>
                      <span className='text-dark'>min price</span>
                    </div>
                    <div className='d-flex align-items-center justify-content-between my-2'>
                      <button className='btn btn-secondary p-2 mx-2' onClick={()=>{
                        setMinPrice(minPrice-1)
                      }}>
                        <i class="fa-solid fa-minus d-inline"></i>
                      </button>
                      <h5 className='d-inline h-4 m-0 text-dark'>{minPrice}</h5>
                      <button className='btn btn-secondary p-2 mx-2' onClick={()=>{
                        setMinPrice(minPrice+1)
                      }}>
                        <i class="fa-solid fa-plus d-inline"></i>
                      </button>
                    </div>
                  </div>
                  <div className='col-5 bg-light rounded-3 text-white'>
                    <div className='my-2'>
                      <span className='text-dark'>max price</span>
                    </div>
                    <div className='d-flex align-items-center justify-content-between my-2'>
                      <button className='btn btn-secondary p-2 mx-2' onClick={()=>{
                        setMaxPrice(maxPrice-1)
                      }}>
                        <i class="fa-solid fa-minus d-inline"></i>
                      </button>
                      <h5 className='d-inline h-4 m-0 text-dark'>{maxPrice}</h5>
                      <button className='btn btn-secondary p-2 mx-2' onClick={()=>{
                        setMaxPrice(maxPrice+1)
                      }}>
                        <i class="fa-solid fa-plus d-inline"></i>
                      </button>
                    </div>
                  </div>
                </div>:<div className="d-flex mx-4 p-2 justify-content-around">
                
                  
                <div className='col-5 bg-light rounded-3 text-white'>
                  <div className='my-2'>
                    <span className='text-dark'>min price</span>
                  </div>
                  <div className='d-flex align-items-center justify-content-between my-2'>
                    <button className='btn btn-secondary p-2 mx-2'disabled onClick={()=>{
                      setMinPrice(minPrice-1)
                    }}>
                      <i class="fa-solid fa-minus d-inline"></i>
                    </button>
                    <h5 className='d-inline h-4 m-0 text-dark' disabled>{minPrice}</h5>
                    <button className='btn btn-secondary p-2 mx-2' disabled onClick={()=>{
                      setMinPrice(minPrice+1)
                    }}>
                      <i class="fa-solid fa-plus d-inline"></i>
                    </button>
                  </div>
                </div>
                <div className='col-5 bg-light rounded-3 text-white'>
                  <div className='my-2'>
                    <span className='text-dark'>max price</span>
                  </div>
                  <div className='d-flex align-items-center justify-content-between my-2'>
                    <button className='btn btn-secondary p-2 mx-2' disabled  onClick={()=>{
                      setMaxPrice(maxPrice-1)
                    }}>
                      <i class="fa-solid fa-minus d-inline"></i>
                    </button>
                    <h5 className='d-inline h-4 m-0 text-dark'>{maxPrice}</h5>
                    <button className='btn btn-secondary p-2 mx-2' disabled onClick={()=>{
                      setMaxPrice(maxPrice+1)
                    }}>
                      <i class="fa-solid fa-plus d-inline"></i>
                    </button>
                  </div>
                </div>
              </div>}
              
              </div>
              

            </div>
            

            <div className='container my-3'>
            <div>
            <button 
              type="button" 
              class="btn btn-lg btn-primary w-75 my-4 rounded-pill" onClick={()=>{
                approveTokens( token0, token0Amount)
              }}>Approve token0</button>
                <button 
              type="button" 
              class="btn btn-lg btn-primary w-75 my-4 rounded-pill" onClick={()=>{
                approveTokens( token1,token1Amount)
              }}>Approve token1</button>
            </div>
            {walletAddress.length > 0 ? (
              !intializedVar?<>
                
              <button 
              type="button" 
              class="btn btn-lg btn-primary w-75 my-4 rounded-pill"
              onClick={() => {
                initializePool(
                  token0,
                  token1,
                  fee,
                  pRatio,
                );
              }}
            
              > <span> Create and Initialize Pool </span></button>
              </>:
              <>
                
          <button 
          type="button" 
          class="btn btn-lg btn-primary w-75 my-4 rounded-pill"
          onClick={() => {
            AddLiquidityProfessionally(
              token0,
              token1,
              fee,
              pRatio,
              minPrice,
              maxPrice,
              token0Amount,
              token1Amount
            );
          }}
        
          > <span>  Add Liquidity </span></button>
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

      </div>

    </div>
  )
}

export default CreatePool
