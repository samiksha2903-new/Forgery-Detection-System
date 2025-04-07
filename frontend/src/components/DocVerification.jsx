import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const DocumentVerifier = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [data, setData] = useState(null);
  const navigate = useNavigate(); // for "Back to Home"

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
    setPreviewUrl(URL.createObjectURL(file));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!selectedFile) {
      alert("Please upload a file first.");
      return;
    }

    const formData = new FormData();
    formData.append("document", selectedFile);

    try {
      const response = await axios.post(
        "http://localhost:5000/api/documents/verify",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          withCredentials: true,
        }
      );
      setData(response.data);
    } catch (error) {
      console.error("Upload error:", error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="text-center p-6 font-sans bg-gray-100 min-h-screen"
    >
      <div className="flex justify-center gap-8 text-lg mb-5">
        <span className="text-purple-700 font-bold border-b-2 border-purple-700">
          Demo
        </span>
      </div>

      <div className="bg-white p-5 rounded-lg shadow-md max-w-md mx-auto mb-5">
        <p className="text-gray-700">Try with upload image (jpg, png, jpeg)</p>
        <label className="cursor-pointer block mt-3">
          <input
            type="file"
            accept="image/png, image/jpeg"
            className="hidden"
            onChange={handleFileChange}
          />
          <div className="p-5 border-2 border-dashed border-gray-300 bg-gray-50 text-gray-600 text-center hover:bg-gray-200 transition-all">
            📂 Drop files here or click to upload.
          </div>
        </label>
      </div>

      {data && (
        <div
          className={`${
            data.isGenuine ? "text-green-600" : "text-red-600"
          } text-xl font-semibold mb-4`}
        >
          <p>
            Similarity ({data.similarity.toFixed(1)}%) below threshold (
            {data.details?.threshold || 80}%)
          </p>
          <p>{data.message}</p>
        </div>
      )}

      {previewUrl && (
        <div className="mb-5">
          <p className="text-sm text-gray-700 mb-2">Image Preview:</p>
          <img
            src={previewUrl}
            alt="Preview"
            className="w-48 mx-auto rounded-lg shadow-md"
          />
        </div>
      )}

      <div className="flex justify-center gap-6 mt-6">
        <button
          type="submit"
          className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-all"
        >
          Submit
        </button>
        <button
          type="button"
          onClick={() => navigate("/")}
          className="bg-gray-300 text-gray-800 px-6 py-2 rounded-lg hover:bg-gray-400 transition-all"
        >
          Back to Home
        </button>
      </div>
    </form>
  );
};

export default DocumentVerifier;
