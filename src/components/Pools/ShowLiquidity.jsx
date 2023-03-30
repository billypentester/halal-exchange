import React from 'react'

function showLiquidity() {

    console.log('showLiquidity')

  return (
    <div class="container d-flex justify-content-center" style={{ marginTop:'4rem' }}>
        <div className="bg-light col-7 m-5 rounded-3 shadow-3-strong p-3">

            <div className="d-flex justify-content-between align-items-center mb-4 mx-3">
                <div>
                    <img src="https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579" alt="bitcoin" width="50" height="50" />
                    <strong className="mx-3">Bitcoin</strong>
                </div>
                <div>
                    <button className="btn btn-primary mx-2">Add Liquidity</button>
                    <button className="btn btn-outline-primary mx-2">Remove Liquidity</button>
                </div>
            </div>

            <div className="d-flex justify-content-around mb-4 mx-3">
                <div className="col-5">
                    <div className="bg-primary p-3 rounded-3 text-white my-2">
                        <h6>Liquidity</h6>
                        <h5 className="text-white my-2">$12345</h5>
                        <div class="bg-light text-dark px-3 py-2 rounded-3">
                            <div className="d-flex justify-content-between">
                                <h6>UNI</h6>
                                <h6>0.1205</h6>
                            </div>
                            <div className="d-flex justify-content-between">
                                <h6>ETH</h6>
                                <h6>0.1104</h6>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-5">
                    <div className="d-flex flex-column">
                        <div className="bg-primary p-3 rounded-3 text-white my-2">
                            <h6 className="lead">Liquidity</h6>
                            <h4 className="text-white my-2">$12345</h4>
                            <div class="bg-light text-dark px-3 py-2 rounded-3">
                                <div className="d-flex justify-content-between align-items-center">
                                    <h6>UNI</h6>
                                    <h6>0.1205</h6>
                                </div>
                                <div className="d-flex justify-content-between align-items-center">
                                    <h6>ETH</h6>
                                    <h6>0.1104</h6>
                                </div>
                            </div>
                        </div>
                        <div className="bg-primary p-3 rounded-3 text-white my-2">
                            <h6 className="lead">Unclaimed Fee</h6>
                            <h4 className="text-white my-2">$12345</h4>
                            <div class="bg-light text-dark px-3 py-2 rounded-3">
                                <div className="d-flex justify-content-between align-items-center">
                                    <h6>UNI</h6>
                                    <h6>0.1205</h6>
                                </div>
                                <div className="d-flex justify-content-between align-items-center">
                                    <h6>ETH</h6>
                                    <h6>0.1104</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            
            </div>

            <div class="mb-4 mx-3">
                <h5>Price Range</h5>
                <div className="d-flex my-3 flex-column align-items-center">
                    <div className="col-12 row justify-content-center">
                        <div className="d-flex flex-column col-5 text-center bg-primary rounded-3 mx-1 p-2 text-white">
                            <h4 className="mx-2">0.71464</h4>
                            <h6 className="mx-2 lead">min Price</h6>
                        </div>
                        <div className="d-flex flex-column col-5 text-center bg-primary rounded-3 mx-1 p-2 text-white">
                            <h4 className="mx-2">0.74128</h4>
                            <h6 className="mx-2 lead">max Price</h6>
                        </div>
                    </div>
                    <div className="d-flex flex-column col-10 text-center bg-primary rounded-3 m-2 p-2 text-white">
                        <h4 className="mx-2">0.73135</h4>
                        <h6 className="mx-2 lead">current Price</h6>
                    </div>
                </div>
            </div>



        </div>
    </div>
  )
}

export default showLiquidity