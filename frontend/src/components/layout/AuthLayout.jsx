// src/layouts/AuthLayout.jsx
import React from 'react';
import imageUrl from '../../assets/auth-image.jpg';

const AuthLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-white">
      <div className="grid lg:grid-cols-2 min-h-screen">
        
        {/* Left Pane: Image */}
        <div className="hidden lg:block">
          <div
            className="h-full bg-cover bg-center"
          >
            {/* You can add an overlay or text here if you want */}
            <div className="h-full bg-gray-900 bg-opacity-40">
                <img src={imageUrl} alt="LocalTrust Logo" className="h-full w-full object-cover" />
            </div>
          </div>
        </div>

        {/* Right Pane: Form */}
        <div className="flex flex-col justify-center items-center p-8 sm:p-12">
          {children}
        </div>

      </div>
    </div>
  );
};

export default AuthLayout;