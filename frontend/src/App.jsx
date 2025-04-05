// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import HistoryPage from './components/HistoryPage';
import FakeDocumentDetection from './components/FakeDocumentDetection';
import NavBar from './components/NavBar';

const App = () => {
    return (
        <Router>
            <div className="App">
                <NavBar />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/upload" element={<FakeDocumentDetection />} />
                    <Route path="/history" element={<HistoryPage />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;