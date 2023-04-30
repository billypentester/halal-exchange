
import './../../index.css'
import React, {useState, useEffect, useContext} from 'react'

import { Token1Context } from "../../contexts/Token1Context";

function CreateToken() {
  const {
    createToken,
    loader,
    setLoader
  } = useContext(Token1Context);
  const { connectWallet, walletAddress } = useContext(Token1Context);
  const [boolean1, setBoolean1] = useState(false);
  const [boolean2, setBoolean2] = useState(false);
  const [boolean3, setBoolean3] = useState(false);
 
  const [name, setName] = useState("");
  const [symbol, setSymbol] = useState("");
  const [totalSupply, setTotalSupply] = useState();
  const [decimals, setDecimals] = useState();


  return (
    <div class="container" style={{ marginTop:'7rem'}}>
{loader?<>{alert("ok")}

</>:<></>}
      <div className="d-flex justify-content-center align-items-center py-5">

        <div class="card text-center shadow-lg col-md-6 col-lg-6 rounded-0 border border-end-0 border-start-0 border-top-0 border-3 border-primary">
          <h5 class="card-header h4">Create Token</h5>
          <div class="card-body">
            <div className='d-flex'>
              <div className="my-2 col-6">
                <h5 class="card-title text-start mx-4 p-2">Token Name</h5>
                <div className="d-flex mx-4 p-2">
                  <input type="text" id="form12" className="form-control form-control-lg border-0 px-4 rounded-pill shadow-3-strong mx-3" placeholder='Ex: Ethereum' onChange={(e)=>{
                    setName(e.target.value)
                    console.log(name)
                  }}/>
                </div>
              </div>
              <div className='my-2 col-6'>
                <h5 class="card-title text-start mx-4 p-2">Token Symbol</h5>
                <div className="d-flex mx-4 p-2">
                  <input type="text" id="form12" className="form-control form-control-lg border-0 px-4 rounded-pill shadow-3-strong mx-3" placeholder='Ex: ETH' onChange={(e)=>{
                    setSymbol(e.target.value)
                    console.log(symbol)
                  }}/>
                </div>
              </div>
            </div>
            <div className='d-flex'>
              <div className='my-2 col-6'>
                <h5 class="card-title text-start mx-4 p-2">Token Supply</h5>
                <div className="d-flex mx-4 p-2">
                  <input type="text" id="form12" className="form-control form-control-lg border-0 px-4 rounded-pill shadow-3-strong mx-3" placeholder='0.0'  onChange={(e)=>{
                    setTotalSupply(e.target.value)
                    console.log(totalSupply)
                  }}/>
                </div>
              </div>
              <div className='my-2 col-6'>
                <h5 class="card-title text-start mx-4 p-2">Token Decimals</h5>
                <div className="d-flex mx-4 p-2">
                  <input type="text" id="form12" className="form-control form-control-lg border-0 px-4 rounded-pill shadow-3-strong mx-3" placeholder='0.0' onChange={(e)=>{
                    setDecimals(e.target.value)
                    console.log(decimals)
                  }} />
                </div> 
              </div>
            </div>
          

                
                          <div className='my-1 col-6'>
                <h5 class="card-title text-start mx-4 p-2">Token Type</h5>
                <div className="d-flex mx-4 p-2 col-6 boxedcheckbox">
                  <div className="m-2">
                    <input className='form-control form-control-lg' type="checkbox" id="0.01" name="skills" value="0.01" onChange={(e) => {
                    setBoolean1(!boolean1)
                    console.log(boolean1);
                  }}/>
                    <label for="0.01">Burnable</label>
                  </div>
                  <div className="m-2">
                    <input className='form-control form-control-lg' type="checkbox" id="0.1" name="skills" value="0.1" onChange={(e) => {
                    setBoolean2(!boolean2);
                    console.log(boolean2);
                    }}/>
                    <label for="0.1">Mintable</label>
                  </div>
                  <div className="m-2">
                    <input className='form-control form-control-lg' type="checkbox" id="0.3" name="skills" value="0.3" onChange={(e) => {
                    setBoolean3(!boolean3)
                    console.log(boolean3)}}/>
                    <label for="0.3">Pauseable</label>
                  </div>
                </div>
              </div>
            <div className='container my-4'>
            {walletAddress.length > 0 ? (
              <>
               
          <button 
          type="button" 
          class="btn btn-lg btn-primary w-75 my-4 rounded-pill"
          onClick={() => {
            setLoader(true)
            createToken(    
              name,
              symbol,
              totalSupply,
              decimals,
              boolean1,
              boolean2,
              boolean3,
      
              );
          }}
        
          > <span> Create Token </span></button>
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

export default CreateToken
