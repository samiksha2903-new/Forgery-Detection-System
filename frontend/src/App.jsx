// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import FakeDocumentDetection from './components/DocVerification';
import NavBar from './components/NavBar';
import AddGenuineDoc from './components/Add-Genuine';

const App = () => {
    return (
        <Router>
            <div>
                <NavBar />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/upload" element={<FakeDocumentDetection />} />
                    <Route path="/add-genuine" element={<AddGenuineDoc />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;