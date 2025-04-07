import React, { useState } from "react";
import axios from "axios";

function AddGenuineDocument() {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState("");
  const [preview, setPreview] = useState(null);

  const handleFile = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!file) {
        setMessage("Select the file first.");
        return;
    }

    const formData = new FormData();
    formData.append("document", file);

    try {
        const res = await axios.post("http://localhost:5000/api/documents/add-genuine", formData, {
            headers: {
                "Content-Type": "multipart/form-data"
            },
            withCredentials: true
        });
        console.log("add-genuine data", res.data);
        setMessage("Upload Successfully: ", res.data.message)
    } catch (error) {
        setMessage("Error: ", error.response?.data?.message || error.message)
    }
  };

  return (
    <div className="flex items-center justify-center h-[60vh] w-full flex-col gap-10">
      <h1 className="text-2xl font-bold text-purple-900 underline underline-offset-8">
        Add genuine document
      </h1>
      <form onSubmit={handleSubmit} className="flex flex-col items-center gap-5">
        <label onChange={handleFile} className="hover:bg-gray-100 border border-dashed p-10 px-20 shadow-2xl cursor-pointer text-gray-600">
          <input type="file" className="hidden" />
          <div>Drag and Drop the file here</div>
        </label>
        <button
          className="bg-blue-950 text-lg text-white p-2 w-25 rounded cursor-pointer"
          type="submit"
        >
          Submit
        </button>
      </form>
      { message && <p className="text-xl font-semibold">{message}</p> }
    </div>
  );
}

export default AddGenuineDocument;
