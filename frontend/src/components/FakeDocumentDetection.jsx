import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./CSS/FakeDocumentDetection.css";

const FakeDocumentDetection = () => {
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setSelectedFile(file);
    };

    return (
        <div className="fake-doc-container">
            <h1 className="portal-title">Developer Portal</h1>
            <h2 className="portal-subtitle">Fake Document Detection</h2>

            {/* Tabs Section */}
            <div className="tabs">
                <span className="tab">How It Works</span>
                <span className="tab active">Demo</span>
                <span className="tab">Documentation</span>
            </div>

            {/* Upload Section */}
            <div className="upload-box">
                <p>Try with upload image (jpg, png, jpeg)</p>
                <label className="file-upload">
                    <input type="file" onChange={handleFileChange} accept="image/png, image/jpeg" />
                    <div className="drop-area">
                        <span>📂 Drop files here or click to upload.</span>
                    </div>
                </label>
            </div>

            {/* Sample Images */}
            <p className="sample-text">Drag and drop the sample image to test the API.</p>
            <div className="sample-images">
                <img src="https://via.placeholder.com/150" alt="Sample 1" />
                <img src="https://via.placeholder.com/150" alt="Sample 2" />
            </div>

            {/* Submit Button */}
            <button className="submit-btn">Submit Request</button>

            {/* Back to Home */}
            <Link to="/">
                <button className="back-btn">Back to Home</button>
            </Link>
        </div>
    );
};

export default FakeDocumentDetection;
