import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigate from './navbar';

const BookingPage = () => {
    // State for form inputs
    const [formData, setFormData] = useState({
        userEmail: '',
        checkInDate: '',
        checkOutDate: '',
        roomType: '',
        numberOfGuests: 0,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    return (
        <>
            <Navigate />
            <div className="container mt-5">
                <h2 className="text-center mb-4">Book a Room</h2>
                <form 
                    action="http://localhost:3001/api/bookings/" 
                    method="POST" 
                    className="shadow-lg p-4 rounded bg-light"
                >
                    <div className="mb-3">
                        <label className="form-label">User Email</label>
                        <input
                            type="email"
                            name="userEmail"
                            className="form-control"
                            value={formData.userEmail}
                            onChange={handleChange} 
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Check-in Date</label>
                        <input
                            type="date"
                            name="checkInDate"
                            className="form-control"
                            value={formData.checkInDate}
                            onChange={handleChange} 
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Check-out Date</label>
                        <input
                            type="date"
                            name="checkOutDate"
                            className="form-control"
                            value={formData.checkOutDate}
                            onChange={handleChange} 
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Room Type</label>
                        <select
                            name="roomType"
                            className="form-select"
                            value={formData.roomType}
                            onChange={handleChange} 
                            required
                        >
                            <option value="">Select a room type</option>
                            <option value="single">Single Room</option>
                            <option value="double">Double Room</option>
                            <option value="suite">Suite</option>
                        </select>
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Number of Guests</label>
                        <input
                            type="number"
                            name="numberOfGuests"
                            className="form-control"
                            value={formData.numberOfGuests}
                            onChange={handleChange} 
                            required
                        />
                    </div>

                    <button type="submit" className="btn btn-primary w-100">
                        Submit Booking
                    </button>
                </form>
            </div>
        </>
    );
};

export default BookingPage;
