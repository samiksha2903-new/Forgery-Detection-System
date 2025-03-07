import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import './CSS/HomePage.CSS';

const features = [
    {
        title: "Liveliness Detection",
        description: "Performs a Passive liveliness detection on the uploaded samples (jpeg/png/jpg) and checks for presentation attacks like picture attack, replay attack.",
    },
    {
        title: "Fake Document Detection",
        description: "This API takes an image of a document and analyses it on pixel level and checks its meta data and makes a decision.",
        route: "/fake-document-detection" // Only this feature has a route
    },
    {
        title: "Age Detection",
        description: "This API takes an image of a person and performs an operation internally and returns the gender and age of the person.",
    },
    {
        title: "Consent Note",
        description: "This API performs a one-to-one comparison with the handwritten photo and the given string and gives back the matching percentage.",
    },
    {
        title: "Audio / Video File to Text",
        description: "This API performs speech to text from a downloadable file and converts the speech into text.",
    },
    {
        title: "Audio/Video URL to Text",
        description: "This API performs speech to text from a downloadable file link and converts the speech into text.",
    },
    {
        title: "Dictate - Speech to Text",
        description: "This API performs speech to text from a downloadable file link and converts the speech into text.",
    },
    {
        title: "Face-ID Match",
        description: "This API performs a one-to-one comparison with the ID photo submitted in order to verify the identity.",
    },
];

const DeveloperPortal = () => {
    return (
        <div className="developer-portal">
            <h1 className="portal-title">Developer Portal</h1>
            <h2 className="portal-subtitle">Welcome To The Developer Portal Playground!</h2>
            <div className="features-container">
                {features.map((feature, index) => (
                    <div className="feature-card" key={index}>
                        <div className="feature-icon">🔍</div>
                        <h3>{feature.title}</h3>
                        <p>{feature.description}</p>

                        {feature.route ? (
                            <Link to={feature.route}>
                                <button className="demo-button">Try For Demo</button>
                            </Link>
                        ) : (
                            <button className="demo-button">Try For Demo</button>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default DeveloperPortal;
