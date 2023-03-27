import React from 'react'

function ConnectWallet() {
  return (
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Connect Wallet</h5>
                    <button type="button" class="btn-close" data-mdb-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <button type="button" className="d-flex align-items-center btn btn-outline-secondary w-100 my-2" data-mdb-ripple-color="dark">
                                    <img className="ml-2 me-3" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/MetaMask_Fox.svg/2048px-MetaMask_Fox.svg.png" alt="Metamask" width='50px' loading="lazy" />
                                    <span className="h5 m-0">Metamask</span>
                                </button>
                                <button type="button" className="d-flex align-items-center btn btn-outline-secondary w-100 my-2" data-mdb-ripple-color="dark">
                                    <img className="ml-2 me-3" src="https://trustwallet.com/assets/images/media/assets/TWT.png" alt="Metamask" width='50px' loading="lazy" />
                                    <span className="h5 m-0">Trust Wallet</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-mdb-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Save changes</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ConnectWallet