import React, { useState } from 'react';
import { features } from '../data/data.js';
import { Link } from 'react-router-dom';

const DeveloperPortalCard = () => {
    const [isDocUpload, setIsDocUpload] = useState(false);
    
    return (
        <div className="text-center p-5 bg-gray-100 min-h-screen">
            <h1 className="text-purple-600 text-3xl font-bold">Developer Portal</h1>
            <h2 className="text-xl text-gray-700 mb-6">Welcome To The Developer Portal Playground!</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {features.map((feature, index) => (
                    <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center transition-transform transform hover:-translate-y-2">
                        <div className="text-4xl mb-3">🔍</div>
                        <h3 className="text-lg font-semibold text-gray-900">{feature.title}</h3>
                        <p className="text-sm text-gray-600 mb-4">{feature.description}</p>
                        {isDocUpload ? (
                            <Link to="/fake-document-detection">
                                <button className="bg-white text-purple-600 border-2 border-purple-600 px-4 py-2 rounded-md text-sm transition-all hover:bg-purple-600 hover:text-white">
                                    Try For Demo
                                </button>
                            </Link>
                        ) : (
                            <button className="bg-white text-purple-600 border-2 border-purple-600 px-4 py-2 rounded-md text-sm transition-all hover:bg-purple-600 hover:text-white">
                                Try For Demo
                            </button>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default DeveloperPortalCard;
