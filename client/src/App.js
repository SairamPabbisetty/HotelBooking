import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage'
import BookingPage from './components/BookingPage'
import BookingHistory from './components/BookingHistory';
import Registration from './components/Registration';
import ProfilePage from './components/ProfilePage';
import LoginPage from './components/Login';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={HomePage}/>
        <Route path="/booking" Component={BookingPage}/>
        <Route path="/history" Component={BookingHistory} />
        <Route path="/register" Component={Registration} />
        <Route path="/profile" Component={ProfilePage}/>
        <Route path="/login" Component={LoginPage}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
