import React from 'react'

function CreatePool() {
  return (
    <div class="container" style={{ marginTop:'7rem'}}>

      <div className="d-flex justify-content-center align-items-center py-5">

        <div class="card text-center shadow-lg col-md-6 col-lg-8 rounded-0 border border-end-0 border-start-0 border-top-0 border-3 border-primary">
          <h5 class="card-header h4">Add Liquidity</h5>
          <div class="card-body row">

            <div className="d-flex flex-column col-6">

              <div className="my-1">
                <h5 class="card-title text-start mx-4 p-2">Token Name</h5>
                <div className="d-flex mx-4 p-2">
                  <input type="text" id="form12" className="form-control form-control-lg border-0 px-4 rounded-pill shadow-3-strong mx-2" placeholder='Ex: Ethereum' />
                  <input type="text" id="form12" className="form-control form-control-lg border-0 px-4 rounded-pill shadow-3-strong mx-2" placeholder='Ex: ETH' />
                </div>
              </div>

              <div className='my-1'>
                <h5 class="card-title text-start mx-4 p-2">Deposited Ammount</h5>
                <div className="d-flex flex-column mx-4 p-2">
                  <input type="text" id="form12" className="form-control form-control-lg border-0 px-4 rounded-pill shadow-3-strong my-2" placeholder='0.0' />
                  <input type="text" id="form12" className="form-control form-control-lg border-0 px-4 rounded-pill shadow-3-strong my-2" placeholder='0.0' />
                </div>
              </div>
  
              <div className='my-1 col-6'>
                <h5 class="card-title text-start mx-4 p-2">Fees</h5>
                <div className="d-flex mx-4 p-2 col-6 boxed">
                  <div className="m-2">
                    <input className='form-control form-control-lg' type="radio" id="0.01" name="skills" value="0.01"/>
                    <label for="0.01">0.01</label>
                  </div>
                  <div className="m-2">
                    <input className='form-control form-control-lg' type="radio" id="0.1" name="skills" value="0.1"/>
                    <label for="0.1">0.1</label>
                  </div>
                  <div className="m-2">
                    <input className='form-control form-control-lg' type="radio" id="0.3" name="skills" value="0.3"/>
                    <label for="0.3">0.3</label>
                  </div>
                </div>
              </div>

            </div>

            <div className='d-flex flex-column col-6'>

              <div className='my-1'>
                <h5 class="card-title text-start mx-4 p-2">Set Price Range</h5>
                <div className="d-flex flex-column mx-4 p-2">
                  <input type="text" id="form12" className="form-control form-control-lg border-0 px-4 rounded-pill shadow-3-strong my-2" placeholder='0.0' />
                  <input type="text" id="form12" className="form-control form-control-lg border-0 px-4 rounded-pill shadow-3-strong my-2" placeholder='0.0' />
                </div>
                <div className="d-flex mx-4 p-2">
                  <input type="text" id="form12" className="form-control form-control-lg border-0 px-4 rounded-pill shadow-3-strong mx-3" placeholder='0.0' />
                  <input type="text" id="form12" className="form-control form-control-lg border-0 px-4 rounded-pill shadow-3-strong mx-3" placeholder='0.0' />
                </div>
              </div>

            </div>

            <div className='container my-3'>
              <button type="button" className="btn btn-primary btn-lg rounded-pill w-100">Connect Wallet</button>
            </div>

          </div>
        </div>

      </div>

    </div>
  )
}

export default CreatePool
