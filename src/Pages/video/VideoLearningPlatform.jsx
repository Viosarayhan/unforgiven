import React from 'react';
import Navbar from '../../Components/Elements/Navbar/Navbar';
import VideoPlayer from './VideoPlayer';
import LessonInfo from './LessonInfo';
import CourseDescription from './CourseDescription';
import RecommendedContent from './RecommendedContent';

export default function VideoLearningPlatform() {
  return (
    <div className="bg-[#fffff0] min-h-screen">
      <Navbar />
      <main className="mt-[64px] container flex flex-col mx-auto px-4 py-8 space-y-8">
        {/* Section utama dengan VideoPlayer dan LessonInfo */}
        <div className="bg-[#FB6816] rounded-3xl p-8 mx-auto lg:h-[520px] lg:w-[1175px]">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* VideoPlayer */}
            <div className="w-full lg:w-[784px]">
              <VideoPlayer />
            </div>
            {/* LessonInfo */}
            <div className="flex-1">
              <LessonInfo />
            </div>
          </div>
        </div>
        {/* Course Description */}
        <div>
        <CourseDescription />
        </div>
        {/* Recommended Content */}
        <div>
        <RecommendedContent />
        </div>
        
      </main>
    </div>
  );
}
