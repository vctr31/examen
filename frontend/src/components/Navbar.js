import React from 'react'
import {Link} from 'react-router-dom'

export const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">Python-flask y react</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/dolar">Dolar</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/euro">Euro</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/real">Real</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">Sobre mi</Link>
            </li>
          </ul>
        </div>
      </nav>
);
