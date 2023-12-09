import React, { useState } from 'react';

function RemoveHiddenCharacters() {
  const [inputText, setInputText] = useState('');
  const [cleanedText, setCleanedText] = useState('');

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const removeHiddenChars = () => {
    const pattern = /[\x00-\x1F\x7F-\x9F]/g;
    const cleaned = inputText.replace(pattern, '');
    setCleanedText(cleaned);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white shadow-md rounded-lg p-6 max-w-md w-full">
        <textarea
          className="w-full p-2 border border-gray-300 rounded mb-4"
          value={inputText}
          onChange={handleInputChange}
          placeholder="Enter text with hidden characters..."
          rows="4"
        />
        <button
          onClick={removeHiddenChars}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Remove Hidden Characters
        </button>
        <div className="mt-4">
          <strong>Cleaned Text:</strong>
          <div className="mt-2 p-2 bg-gray-50 border border-gray-300 rounded">
            {cleanedText}
          </div>
        </div>
      </div>
    </div>
  );
}

export default RemoveHiddenCharacters;
