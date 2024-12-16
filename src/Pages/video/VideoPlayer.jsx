import React from 'react';

export default function VideoPlayer() {
  return (
    <div className="bg-[#fffff0] rounded-lg shadow-md p-4 w-full h-auto">
      <div className="aspect-w-16 aspect-h-9 rounded-lg mb-4 h-[410px]">
      <div className="relative w-full h-full pb-[45.75%] rounded-lg mb-4 bg-black">
        <video 
        width="790" 
        height="100" 
        controls 
        style={{ border: "2px solid black" }}
      >
        <source src="/src/assets/CV Video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      </div>
      </div>
    </div>
  );
}

