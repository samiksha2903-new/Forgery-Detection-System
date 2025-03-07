// src/components/UploadPage.js
import React, { useState } from 'react';

const UploadPage = () => {
    const [file, setFile] = useState(null);
    const [status, setStatus] = useState(null);

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    }

    const startVerification = () => {
        if (file) {
            setStatus('Verifying...');
            // Simulate a verification process
            setTimeout(() => {
                setStatus('Verification Complete!');
            }, 3000);
        } else {
            setStatus('No file selected.');
        }
    }

    return (
        <div>
            <h2>Upload Document</h2>
            <input type="file" onChange={handleFileChange} />
            <button onClick={startVerification}>Start Verification</button>
            {status && <p>{status}</p>}
        </div>
    );
}

export default UploadPage;