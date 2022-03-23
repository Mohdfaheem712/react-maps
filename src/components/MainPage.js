import React from "react";
import GoogleMap from './map/GoogleMap';
import About from './About';
import NotFoundPage from './NotFoundPage';
import { Routes, Route } from "react-router-dom";


export default function MainPage(props) {
    return (
        <div className="main-wrapper">
            <Routes>
                <Route exact path="/" element={<GoogleMap />} />
                <Route exact path="/about" element={<About />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </div>
    );
}