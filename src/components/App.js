import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '../assets/reset.css';
import './SignInPage';
import './SignUpPage';
import './HomePage';
import HomePage from './HomePage';
import SignInPage from './SignInPage';
import SignUpPage from './SignUpPage';


export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<SignInPage/>} />
                <Route path="/sign-up" element={<SignUpPage />} />
                <Route path="/home" element={<HomePage />} />
            </Routes>
        </BrowserRouter>
    )
};