import React, {useState} from 'react'

function BridgeLiquidity() {

  const [position, setPosition] = useState({ x: 25});
  const [isDragging, setIsDragging] = useState(false);

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


  return (
    <div class="container" style={{ marginTop:'4rem' }}>

      <div className="d-flex justify-content-center align-items-center py-5">

      <div class="card text-center shadow-lg col-md-6 col-lg-8 rounded-0 border border-end-0 border-start-0 border-top-0 border-3 border-primary">
        <h5 class="card-header h4">Add Liquidity to Bridge</h5>
        <div class="card-body">

          <div className="d-flex">

            <div className="d-flex flex-column col-6">
            
              <div className='d-flex col-12 flex-column'>
                <div className="d-flex">
                  <div className="my-2">
                    <h5 class="card-title text-start p-2">Chain</h5>
                    <div className="d-flex p-2">
                      <input type="text" id="form12" className="form-control form-control-lg border-0 px-4 rounded-pill shadow-3-strong mx-3" placeholder='Ex: Ethereum' />
                    </div>
                  </div>
                  <div className='my-2'>
                    <h5 class="card-title text-start p-2">Token</h5>
                    <div className="d-flex p-2">
                      <input type="text" id="form12" className="form-control form-control-lg border-0 px-4 rounded-pill shadow-3-strong mx-3" placeholder='Ex: ETH' />
                    </div>
                  </div>
                </div>
                <div className='my-2'>
                  <h5 class="card-title text-start p-2">Deposited Ammount</h5>
                  <div className="d-flex p-2">
                    <input type="text" id="form12" className="form-control form-control-lg border-0 px-4 rounded-pill shadow-3-strong mx-3" placeholder='0.0' />
                  </div>
                </div>
              </div>

              <div className='my-1 col-12'>
                <h5 class="card-title text-start mx-4 p-2">Fees</h5>
                <div className="d-flex mx-4 p-2 col-6 boxedradio">
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

            <div className='d-flex col-6 flex-column'>
                <div className='h-100 d-flex flex-column mx-4 mb-3 px-4 bg-light'>
                  <svg class="range-svg" viewBox="0 0 500 100">
                    <rect class="range-track" x="25" y="45" width="450" height="10" rx="5" />
                    <circle draggable class="range-handle range-handle--left" cx={position.x} cy="50" r="12" onMouseDown={handleMouseDown} onMouseMove={handleMouseMove} onMouseUp={handleMouseUp} onMouseLeave={handleMouseLeave} />
                    <circle class="range-handle range-handle--right" cx="475" cy="50" r="12" />
                    <rect class="range-selection" x="25" y="45" width="450" height="10" rx="5" />
                  </svg>
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

export default BridgeLiquidity
