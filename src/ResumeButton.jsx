import React, { useState } from 'react';

export default function ResumeButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const resumeFile = './public/resources/resume.pdf'; // Adjust the path as necessary

  return (
    <>
      {/* Gradient Trigger Button */}
      <button
        onClick={() => {
          setIsOpen(true);
          setIsLoading(true);
        }}
        className="inline-flex items-center px-6 py-2.5 bg-gradient-to-r from-[#00C4FF] via-[#0099FF] to-[#0066FF] text-white rounded-xl font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 ease-in-out"
      >
        View Resume
      </button>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50 animate-fadeIn">
          <div className="bg-white rounded-3xl w-11/12 md:w-3/4 lg:w-2/3 overflow-hidden shadow-2xl transform animate-slideUp border border-gray-200">
            {/* Modal Header */}
            <div className="flex justify-between items-center px-5 py-3 bg-gradient-to-r from-[#00C4FF] via-[#0099FF] to-[#0066FF] text-white font-bold shadow-md">
              <span className="text-lg">Resume</span>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-full hover:bg-white/20 transition flex items-center justify-center"
                aria-label="Close"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Loader Overlay */}
            {isLoading && (
              <div className="absolute inset-0 flex justify-center items-center bg-white/70 z-10">
                <div className="relative w-16 h-16">
                  <div className="absolute w-16 h-16 border-4 border-transparent border-t-[#00C4FF] border-r-[#0066FF] rounded-full animate-spin"></div>
                  <div className="absolute w-6 h-6 bg-gradient-to-r from-[#00C4FF] to-[#0066FF] rounded-full animate-pulse top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
                </div>
              </div>
            )}

            {/* Resume Viewer */}
            <div className="relative">
              <iframe
                src={resumeFile}
                className={`w-full h-[70vh] border-0 transition-opacity duration-500 ${
                  isLoading ? 'opacity-0' : 'opacity-100'
                }`}
                title="Resume"
                onLoad={() => setIsLoading(false)}
              ></iframe>
            </div>

            {/* Footer */}
            <div className="flex justify-end gap-4 px-5 py-4 bg-gray-100 border-t border-gray-200">
              <a
                href={resumeFile}
                download
                className="flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-[#00C4FF] to-[#0066FF] text-white rounded-lg font-medium shadow hover:shadow-lg transform hover:scale-105 transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4"
                  />
                </svg>
                Download
              </a>
              <button
                onClick={() => setIsOpen(false)}
                className="px-5 py-2 bg-gray-300 text-black rounded-lg font-medium hover:bg-gray-400 transform hover:scale-105 transition"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Animations */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from { transform: translateY(20px) scale(0.95); opacity: 0; }
          to { transform: translateY(0) scale(1); opacity: 1; }
        }
        .animate-fadeIn { animation: fadeIn 0.3s ease-out forwards; }
        .animate-slideUp { animation: slideUp 0.3s ease-out forwards; }
      `}</style>
    </>
  );
}
