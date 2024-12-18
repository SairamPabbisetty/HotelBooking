import React, { useContext } from 'react';
import { UserContext } from './UserContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigate from './navbar';

const ProfilePage = () => {
    const { user } = useContext(UserContext);

    if (!user) {
        return (
            <>
                <Navigate />
                <div className="container mt-5 text-center">
                    <h2 className="text-danger">No Profile Found</h2>
                    <p>Please <a href="/login" className="text-primary">Login</a> to view your profile.</p>
                </div>
            </>
        );
    }

    return (
        <>
        <Navigate />
        <div className="container mt-5 d-flex justify-content-center">
            <div className="card shadow-lg p-3 mb-5 bg-white rounded" style={{ width: '400px' }}>
                <div className="card-body">
                    <h3 className="card-title text-center mb-4">Your Profile</h3>
                    <p className="card-text"><strong>First Name:</strong> {user.firstName}</p>
                    <p className="card-text"><strong>Last Name:</strong> {user.lastName}</p>
                    <p className="card-text"><strong>Mobile:</strong> {user.mobile}</p>
                    <p className="card-text"><strong>Email:</strong> {user.email}</p>
                </div>
                <div className="text-center mt-3">
                    <a href="/edit-profile" className="btn btn-primary w-100">Edit Profile</a>
                </div>
            </div>
        </div>
        </>
    );
};

export default ProfilePage;
