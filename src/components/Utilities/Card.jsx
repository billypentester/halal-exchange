import React from 'react'
import { Link } from 'react-router-dom'

function Card({ image, title, text, button, link }) {
  return (
    <div className="card text-center shadow-lg col-3">
        <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="primary">
            <img src={image} alt={title} className="img-fluid" />
            <Link to={link}>
              <div className="mask" style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
            </Link>
        </div>
        <div className="card-body bg-primary text-white">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{text}</p>
            <button type="button" className="btn btn-lg btn-outline-white">{button}</button>
        </div>
    </div>
  )
}

export default Card