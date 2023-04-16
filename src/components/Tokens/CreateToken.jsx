
import './../../index.css'
import React, {useState, useEffect, useContext} from 'react'

import { Token1Context } from "../../contexts/Token1Context";

function CreateToken() {
  const {
    createToken
  } = useContext(Token1Context);
  const { connectWallet, walletAddress } = useContext(Token1Context);
  const [boolean1, setBoolean1] = useState(true);
  const [boolean2, setBoolean2] = useState(true);
  const [boolean3, setBoolean3] = useState(true);
  const [name, setName] = useState("");
  const [symbol, setSymbol] = useState("");
  const [totalSupply, setTotalSupply] = useState();
  const [decimals, setDecimals] = useState();

  return (
    <div class="container" style={{ marginTop:'7rem'}}>

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
                <h5 class="card-title text-start mx-4 p-2">Fees</h5>
                <div className="d-flex mx-4 p-2 col-6 boxed">
                  <div className="m-2">
                    <input className='form-control form-control-lg' type="radio" id="0.01" name="skills" value="0.01" onChange={(e) => {
                    setBoolean1(true)
                    console.log(boolean1);
                  }}/>
                    <label for="0.01">0.01</label>
                  </div>
                  <div className="m-2">
                    <input className='form-control form-control-lg' type="radio" id="0.1" name="skills" value="0.1" onChange={(e) => {
                    setBoolean2(true);
                    console.log(boolean2);
                    }}/>
                    <label for="0.1">0.1</label>
                  </div>
                  <div className="m-2">
                    <input className='form-control form-control-lg' type="radio" id="0.3" name="skills" value="0.3" onChange={(e) => {
                    setBoolean3(true)
                    console.log(boolean3)}}/>
                    <label for="0.3">0.3</label>
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
            createToken(    
              name,
              symbol,
              totalSupply,
              decimals,
              boolean1,
              boolean2,
              boolean3);
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
