import React from 'react'

function UseBridge() {
  return (
    <div className="d-flex justify-content-center flex-column align-items-center" style={{height:'100vh'}}>

      <div className="my-5 p-3 bg-light rounded-3">
        <ul class="nav nav-pills nav-fill mb-3" id="ex-with-icons" role="tablist">
          <li class="nav-item" role="presentation">
            <a class="nav-link active" id="ex-with-icons-tab-1" data-mdb-toggle="tab" href="#ex-with-icons-tabs-1" role="tab"
              aria-controls="ex-with-icons-tabs-1" aria-selected="true"><i class="fas fa-chart-pie fa-fw me-2"></i>Deposit</a>
          </li>
          <li class="nav-item" role="presentation">
            <a class="nav-link" id="ex-with-icons-tab-3" data-mdb-toggle="tab" href="#ex-with-icons-tabs-3" role="tab"
              aria-controls="ex-with-icons-tabs-3" aria-selected="false"><i class="fas fa-cogs fa-fw me-2"></i>Widhrawal</a>
          </li>
        </ul>
        <div class="tab-content" id="ex-with-icons-content">
          <div class="tab-pane fade show active" id="ex-with-icons-tabs-1" role="tabpanel" aria-labelledby="ex-with-icons-tab-1">
            <div className="my-2">
              <h5 class="card-title text-start mx-4 p-2">From</h5>
              <div className="d-flex mx-4 p-2">
                <input type="text" id="form12" className="form-control form-control-lg border-0 px-4 rounded-pill shadow-3-strong mx-3" placeholder='0.0' />
                <div className="dropdown mx-2">
                  <button className="btn btn-lg btn-primary dropdown-toggle rounded-pill" type="button" id="dropdownMenuButton" data-mdb-toggle="dropdown" aria-expanded="false">
                    Select Token
                  </button>
                  <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <li><a className="dropdown-item" href="#">Action</a></li>
                    <li><a className="dropdown-item" href="#">Another action</a></li>
                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                  </ul>
                </div>
                <div className="dropdown mx-2">
                  <button className="btn btn-lg btn-primary dropdown-toggle rounded-pill" type="button" id="dropdownMenuButton2" data-mdb-toggle="dropdown" aria-expanded="false">
                    Select Chain
                  </button>
                  <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton2">
                    <li><a className="dropdown-item" href="#">Action</a></li>
                    <li><a className="dropdown-item" href="#">Another action</a></li>
                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                  </ul>
                </div>
              </div>
            </div> 
            <div className="my-2">
            <h5 class="card-title text-start mx-4 p-2">To</h5>
            <div className="d-flex mx-4 p-2">
              <input type="text" id="form12" className="form-control form-control-lg border-0 px-4 rounded-pill shadow-3-strong mx-3" placeholder='0.0' />
              <div className="dropdown mx-2">
                <button className="btn btn-lg btn-primary dropdown-toggle rounded-pill" type="button" id="dropdownMenuButton" data-mdb-toggle="dropdown" aria-expanded="false">
                  Select Token
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </div>
              <div className="dropdown mx-2">
                <button className="btn btn-lg btn-primary dropdown-toggle rounded-pill" type="button" id="dropdownMenuButton2" data-mdb-toggle="dropdown" aria-expanded="false">
                  Select Chain
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton2">
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </div>
            </div>
            </div> 
            <div className="my-5">
              <button type="button" className="btn btn-primary btn-lg btn-block rounded-pill shadow-3-strong">Deposit</button>
            </div>
          </div>
          <div class="tab-pane fade" id="ex-with-icons-tabs-3" role="tabpanel" aria-labelledby="ex-with-icons-tab-3">
          <div className="my-2">
              <h5 class="card-title text-start mx-4 p-2">From</h5>
              <div className="d-flex mx-4 p-2">
                <input type="text" id="form12" className="form-control form-control-lg border-0 px-4 rounded-pill shadow-3-strong mx-3" placeholder='0.0' />
                <div className="dropdown mx-2">
                  <button className="btn btn-lg btn-primary dropdown-toggle rounded-pill" type="button" id="dropdownMenuButton" data-mdb-toggle="dropdown" aria-expanded="false">
                    Select Token
                  </button>
                  <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <li><a className="dropdown-item" href="#">Action</a></li>
                    <li><a className="dropdown-item" href="#">Another action</a></li>
                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                  </ul>
                </div>
                <div className="dropdown mx-2">
                  <button className="btn btn-lg btn-primary dropdown-toggle rounded-pill" type="button" id="dropdownMenuButton2" data-mdb-toggle="dropdown" aria-expanded="false">
                    Select Chain
                  </button>
                  <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton2">
                    <li><a className="dropdown-item" href="#">Action</a></li>
                    <li><a className="dropdown-item" href="#">Another action</a></li>
                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                  </ul>
                </div>
              </div>
            </div> 
            <div className="my-2">
            <h5 class="card-title text-start mx-4 p-2">To</h5>
            <div className="d-flex mx-4 p-2">
              <input type="text" id="form12" className="form-control form-control-lg border-0 px-4 rounded-pill shadow-3-strong mx-3" placeholder='0.0' />
              <div className="dropdown mx-2">
                <button className="btn btn-lg btn-primary dropdown-toggle rounded-pill" type="button" id="dropdownMenuButton" data-mdb-toggle="dropdown" aria-expanded="false">
                  Select Token
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </div>
              <div className="dropdown mx-2">
                <button className="btn btn-lg btn-primary dropdown-toggle rounded-pill" type="button" id="dropdownMenuButton2" data-mdb-toggle="dropdown" aria-expanded="false">
                  Select Chain
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton2">
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </div>
            </div>
            </div> 
            <div className="my-5">
              <button type="button" className="btn btn-primary btn-lg btn-block rounded-pill shadow-3-strong">Deposit</button>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default UseBridge
