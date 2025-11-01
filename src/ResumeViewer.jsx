import React, { useState } from 'react';

export default function ResumeViewer() {
  const [isOpen, setIsOpen] = useState(false);

  const resumeFile = "./public/resources/resume.pdf"; // For Vite, public assets are served from root

  return (
    <div className="text-center">
      <button
        onClick={() => setIsOpen(true)}
        className="px-6 py-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white rounded-lg shadow-lg hover:opacity-90 transition"
      >
        View Resume
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg w-11/12 md:w-[800px] lg:w-[900px] shadow-2xl overflow-hidden max-w-full">
            {/* Header */}
            <div className="flex justify-between items-center px-4 py-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white">
              <h2 className="text-lg font-bold">My Resume</h2>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white text-xl font-bold hover:text-gray-200"
              >
                ✖
              </button>
            </div>

            {/* PDF Viewer */}
            <iframe
              src={resumeFile}
              title="Resume"
              className="w-full h-[120vh] min-h-[500px] border-0"
              style={{ minWidth: '300px', maxWidth: '100%', width: '100%' }}
            ></iframe>

            {/* Footer */}
            <div className="flex justify-end gap-3 px-3 py-3 bg-gray-100">
              <a
                href={resumeFile}
                download
                className="px-4 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition"
              >
                Download
              </a>
              <button
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 bg-gray-300 text-gray-800 rounded-lg hover:bg-gray-400 transition"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
