import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 

const Navigate = () => {
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">Home</a>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="/booking">Book a Room</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/profile">User Profile</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/history">Booking History</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navigate;
