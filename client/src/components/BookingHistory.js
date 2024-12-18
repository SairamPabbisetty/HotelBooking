import React, { useState, useEffect } from 'react'
import Navigate from './navbar'

const BookingHistory = () => {

    const [bookings, setBookings] = useState([]);
    
    useEffect(() => {
        fetch('hotel-booking-api-pi.vercel.app/api/bookings')
            .then((response) => response.json()) 
            .then((data) => {
                console.log(data); 
                setBookings(data.data || []); 
            })
            .catch((err) => {
                console.error("Error fetching bookings:", err);
            });
    }, []);
    

    return (
        <div>
            <Navigate />
            <div className="container mt-5">
                <h2 className="text-center mb-4">Booking History</h2>
                {bookings.length === 0 ? (
                    <p className="text-center">No bookings found. Please <a href="/booking">book</a> a room!</p>
                ) : (
                    <div className="list-group">
                        {bookings.map((booking, index) => (
                            <div key={index} className="list-group-item">
                                <p><strong>Email:</strong> {booking.userEmail}</p>
                                <p><strong>Check-in Date:</strong> {booking.checkInDate}</p>
                                <p><strong>Check-out Date:</strong> {booking.checkOutDate}</p>
                                <p><strong>Room Type:</strong> {booking.roomType}</p>
                                <p><strong>Number of Guests:</strong> {booking.numberOfGuests}</p>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}

export default BookingHistory
