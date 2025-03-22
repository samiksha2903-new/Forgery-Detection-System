export const features = [
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