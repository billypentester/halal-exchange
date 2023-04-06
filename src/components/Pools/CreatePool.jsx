import React, {useState, useEffect} from 'react'
import './../../index.css'

function CreatePool() {

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
    <div class="container" style={{ marginTop:'7rem'}}>

      <div className="d-flex justify-content-center align-items-center py-5">

        <div class="card text-center shadow-lg col-md-6 col-lg-10 rounded-0 border border-end-0 border-start-0 border-top-0 border-3 border-primary">
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
                <div className="d-flex flex-column mx-4 mb-3 px-4 bg-light h-100">
                  <svg class="range-svg" viewBox="0 0 500 100">
                    <rect class="range-track" x="25" y="45" width="450" height="10" rx="5" />
                    <circle draggable class="range-handle range-handle--left" cx={position.x} cy="50" r="12" onMouseDown={handleMouseDown} onMouseMove={handleMouseMove} onMouseUp={handleMouseUp} onMouseLeave={handleMouseLeave} />
                    <circle class="range-handle range-handle--right" cx="475" cy="50" r="12" />
                    <rect class="range-selection" x="25" y="45" width="450" height="10" rx="5" />
                  </svg>
                </div>
                <div className="d-flex mx-4 p-2 justify-content-around">
                  <div className='col-5 bg-light rounded-3 text-white'>
                    <div className='my-2'>
                      <span className='text-dark'>min price</span>
                    </div>
                    <div className='d-flex align-items-center justify-content-between my-2'>
                      <button className='btn btn-secondary p-2 mx-2'>
                        <i class="fa-solid fa-minus d-inline"></i>
                      </button>
                      <h5 className='d-inline h-4 m-0 text-dark'>23.3554</h5>
                      <button className='btn btn-secondary p-2 mx-2'>
                        <i class="fa-solid fa-plus d-inline"></i>
                      </button>
                    </div>
                  </div>
                  <div className='col-5 bg-light rounded-3 text-white'>
                    <div className='my-2'>
                      <span className='text-dark'>max price</span>
                    </div>
                    <div className='d-flex align-items-center justify-content-between my-2'>
                      <button className='btn btn-secondary p-2 mx-2'>
                        <i class="fa-solid fa-minus d-inline"></i>
                      </button>
                      <h5 className='d-inline h-4 m-0 text-dark'>23.3554</h5>
                      <button className='btn btn-secondary p-2 mx-2'>
                        <i class="fa-solid fa-plus d-inline"></i>
                      </button>
                    </div>
                  </div>
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
