import React from 'react'
import gif from './../images/landingPage.png'
import {Link} from 'react-router-dom'

function Landing() {
  return (
      <div class="bg-primary">
      <div class="container d-flex justify-content-around align-items-center p-5" style={{ height:'100vh' }}>
        <div class="col-5 py-5">
          <h1 class="text-white my-4">Welcome to the Decentralized Exchange</h1>
          <p class="text-white my-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            voluptatum, quod, quia, voluptas quae voluptatem quibusdam
            necessitatibus voluptates quos accusantium quas. Quisquam, quae
            voluptates. Quisquam, quae voluptates. Quisquam, quae voluptates.
          </p>
          <Link to="/swap">
            <button class="btn btn-light btn-lg w-50">Get Started</button>
          </Link>
        </div>
        <div class="col-6">
          <img src={gif} className="img-fluid" alt="landing page" />
        </div>
      </div>
      </div>
  )
}

export default Landing