import React from 'react'
import './../../index.css'

function CreateToken() {
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
                  <input type="text" id="form12" className="form-control form-control-lg border-0 px-4 rounded-pill shadow-3-strong mx-3" placeholder='Ex: Ethereum' />
                </div>
              </div>
              <div className='my-2 col-6'>
                <h5 class="card-title text-start mx-4 p-2">Token Symbol</h5>
                <div className="d-flex mx-4 p-2">
                  <input type="text" id="form12" className="form-control form-control-lg border-0 px-4 rounded-pill shadow-3-strong mx-3" placeholder='Ex: ETH' />
                </div>
              </div>
            </div>
            <div className='d-flex'>
              <div className='my-2 col-6'>
                <h5 class="card-title text-start mx-4 p-2">Token Supply</h5>
                <div className="d-flex mx-4 p-2">
                  <input type="text" id="form12" className="form-control form-control-lg border-0 px-4 rounded-pill shadow-3-strong mx-3" placeholder='0.0' />
                </div>
              </div>
              <div className='my-2 col-6'>
                <h5 class="card-title text-start mx-4 p-2">Token Decimals</h5>
                <div className="d-flex mx-4 p-2">
                  <input type="text" id="form12" className="form-control form-control-lg border-0 px-4 rounded-pill shadow-3-strong mx-3" placeholder='0.0' />
                </div> 
              </div>
            </div>
            <div className='container my-4'>
              <button type="button" data-mdb-ripple-color="primary" className="btn btn-primary btn-lg rounded-pill w-100" data-mdb-toggle="modal" data-mdb-target="#exampleModal">Connect Wwallet</button>
            </div>
          </div>
        </div>

      </div>

    </div>
  )
}

export default CreateToken
