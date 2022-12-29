import React from 'react'
import gif from './../images/landingPage.png'
import {Link} from 'react-router-dom'

function Landing() {
  return (
      <div className="bg-primary">
      <div className="container d-flex justify-content-around align-items-center p-5" style={{ height:'100vh' }}>
        <div className="col-5 py-5">
          <h1 className="text-white my-4">Welcome to the Decentralized Exchange</h1>
          <p className="text-white my-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            voluptatum, quod, quia, voluptas quae voluptatem quibusdam
            necessitatibus voluptates quos accusantium quas. Quisquam, quae
            voluptates. Quisquam, quae voluptates. Quisquam, quae voluptates.
          </p>
          <Link to="/swap">
            <button className="btn btn-light btn-lg w-50">Get Started</button>
          </Link>
        </div>
        <div className="col-6">
          <img src={gif} className="img-fluid" alt="landing page" />
        </div>
      </div>
      </div>
  )
}

export default Landing