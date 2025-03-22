// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import HistoryPage from './components/HistoryPage';
import UploadPage from './components/UploadPage';
import FakeDocumentDetection from './components/FakeDocumentDetection';
import NavBar from './components/NavBar';

const App = () => {
    return (
        <Router>
            <div className="App">
                <NavBar />
                <h1>Document Forgery Detection System</h1>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/upload" element={<UploadPage />} />
                    <Route path="/history" element={<HistoryPage />} />
                    <Route path="/fake-document-detection" element={<FakeDocumentDetection />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;