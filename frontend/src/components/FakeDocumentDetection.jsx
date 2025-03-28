import React, { useState } from "react";
import { Link } from "react-router-dom";
import doc from "../assets/voting1.jpg";

const FakeDocumentDetection = () => {
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setSelectedFile(file);
    };

    return (
        <div className="text-center p-6 font-sans bg-gray-100 min-h-screen">
            {/* Tabs Section */}
            <div className="flex justify-center gap-8 text-lg mb-5">
                <span className="text-purple-700 font-bold border-b-2 border-purple-700">Demo</span>
            </div>

            {/* Upload Section */}
            <div className="bg-white p-5 rounded-lg shadow-md max-w-md mx-auto mb-5">
                <p className="text-gray-700">Try with upload image (jpg, png, jpeg)</p>
                <label className="cursor-pointer block mt-3">
                    <input type="file" onChange={handleFileChange} accept="image/png, image/jpeg" className="hidden" />
                    <div className="p-5 border-2 border-dashed border-gray-300 bg-gray-50 text-gray-600 text-center hover:bg-gray-200 transition-all">
                        📂 Drop files here or click to upload.
                    </div>
                </label>
            </div>

            {/* Sample Images */}
            <p className="text-sm text-gray-600 mb-3">Drag and drop the sample image to test the API.</p>
            <div className="flex justify-center gap-5 mb-5">
                <img src={doc} alt="Sample 1" className="w-36 h-auto rounded-lg shadow-md" />
            </div>

            {/* Submit Button */}
            <button className="bg-purple-700 text-white py-3 px-6 mr-4 text-lg rounded-md hover:bg-purple-900 transition-all">Submit Request</button>

            {/* Back to Home */}
            <Link to="/">
                <button className="mt-4 bg-white text-purple-700 border-2 border-purple-700 py-2 px-4 text-md rounded-md hover:bg-purple-700 hover:text-white transition-all">
                    Back to Home
                </button>
            </Link>
        </div>
    );
};

export default FakeDocumentDetection;