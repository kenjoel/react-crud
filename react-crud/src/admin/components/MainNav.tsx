import React from 'react';
import { Link } from 'react-router-dom';

const MainNav = () => {
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <a className="navbar-brand" href="#">Welcome</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="nav navbar-nav ml-auto">
        <li className="nav-item active">
            <Link className="nav-link" href="#" to={'/admin/products'}>Dashboard <span className="sr-only">(Configure)</span></Link>
        </li>
    </ul>
    </div>
    </nav>
    )
}

export default MainNav