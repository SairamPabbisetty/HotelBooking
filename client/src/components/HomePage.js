import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Navigate from './navbar';

const HomePage = () => {
    return (
        <div 
            className="d-flex justify-content-center align-items-center" 
            style={{
                height: '100vh',
                backgroundImage: 'url("https://wallpapercave.com/wp/wp8521453.jpg")'
            }}
        >
            <div className="container text-center">
                <Navigate />
                <div className="mt-5">
                    <h1>Welcome to MyBookings</h1>
                    <p>Your one-stop solution for managing hotel bookings and profiles.</p>
                    <div className="d-flex justify-content-center mt-4">
                        <a href="/booking" className="btn btn-primary btn-lg mx-2">Get Started</a>
                        <a href="/register" className="btn btn-outline-light btn-lg mx-2">Register</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomePage;
