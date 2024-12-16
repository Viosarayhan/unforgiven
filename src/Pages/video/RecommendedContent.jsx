import React from 'react';

export default function RecommendedContent() {
  return (
    <div className="">
        <div className="flex items-center gap-4 mb-6 w-full">
            <div className="h-[3px] bg-black w-[150px]" />
            <h2 className="text-2xl font-semibold whitespace-nowrap">Rekomendasi Lainnya</h2>
            <div className="h-[3px] bg-black flex-1" />
        </div>
        <div className="mx-[150px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-[#FFFFF0]">
        <ContentCard
          title="Effective CV Structure"
          instructor="Siska Larasati"
          videoCount={3}
          rating={5}
          image="/public/assetsvivit/Siska Larasati.png"
        />
        <ContentCard
          title="Building a Professional Portfolio"
          instructor="Maya Putri"
          videoCount={3}
          rating={4.9}
          image="/public/assetsvivit/Maya putri.png"
        />
        <ContentCard
          title="Mastering Interview Questions"
          instructor="Nadia Kurnia"
          videoCount={3}
          rating={4.7}
          image="/public/assetsvivit/Nadia kurnia.png"
        />
        <ContentCard
          title="Making a Great Impression in Interviews"
          instructor="Rian Utama"
          videoCount={3}
          rating={4.9}
          image="/public/assetsvivit/Rian utama.png"
        />
      </div>
    </div>
  );
}

function ContentCard({ title, instructor, videoCount, rating, image }) {
  return (
    <div className="bg-[#4c37ee] rounded-lg overflow-hidden shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300 ease-in-out">
      <img src={image} alt={title} className="w-full h-60 object-cover" />
      <div className="p-4">
        <h3 className="text-ivory font-semibold text-lg mb-2 line-clamp-2">{title}</h3>
        <div className="flex flex-col gap-1 text-[#FFFFF0] text-sm">
          <span className="flex items-center gap-1">
            <img src="/public/assetsvivit/person_outline.svg" alt="Instructor" className="w-4 h-4 " />
            {instructor}
          </span>
          <span className="flex items-center gap-1">
            <img src="/public/assetsvivit/video_library.svg" alt="Videos" className="w-4 h-4" />
            {videoCount} Video
          </span>
          <span className="flex items-center gap-1">
            <img src="/public/assetsvivit/star.svg" alt="Rating" className="w-4 h-4" />
            {rating}/5
          </span>
        </div>
      </div>
    </div>
  );
}


