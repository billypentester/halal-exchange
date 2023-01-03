import React from 'react'
import { Link } from 'react-router-dom'

function Card({ image, title, text, button, link }) {
  return (
    <div className="card text-center shadow-lg col-3 rounded-0 border border-end-0 border-start-0 border-bottom-0 border-3 border-primary">
        <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="primary">
            <img src={image} alt={title} className="img-fluid p-5" />
            <Link to={link}>
              <div className="mask" style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
            </Link>
        </div>
        <div className="card-body">
            <h5 className="h4">{title}</h5>
            <p className="card-text my-3">{text}</p>
            <button type="button" className="btn btn-lg btn-primary my-2">{button}</button>
        </div>
    </div>
  )
}

export default Card