import React from 'react';
import { Camera } from 'lucide-react';
import './index.css';

export default function ProfileCard() {
  return (
    <div className="flex justify-center bg-white min-h-screen ">
      <div
        className="w-full max-w-md shadow-md rounded-md"
        style={{ backgroundColor: '#cdcdcd' }}
      >
        <div className="px-6 py-4 border-b border-black bg-white">
          <h2 className="text-xl font-semibold text-gray-800 text-left">Account Settings</h2>
        </div>

        <div className="px-6 py-6 flex items-center space-x-4 ">
          <div className="relative">
            <img
              src="https://randomuser.me/api/portraits/women/79.jpg"
              alt="profile"
              className="w-16 h-16 rounded-full object-cover"
            />
            <div className="absolute bottom-0 right-0 bg-[#6C25FF] p-1 rounded-full">
              <Camera size={16} color="white" />
            </div>
          </div>

          <div>
            <h3 className="text-md font-semibold text-gray-800">rttr</h3>
            <p className="text-sm text-gray-600">gfgf@gmail</p>
          </div>
        </div>
        
        <div className="px-6 pb-6 text-sm text-gray-700 leading-relaxed text-center">
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
        </div>
      </div>
    </div>
  );
}
