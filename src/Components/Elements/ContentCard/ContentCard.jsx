import { Link } from "react-router-dom";
function ContentCard({ content = {} }) {
  const {title, instructor, videoCount, rating, image, slug} = content;
  return (
      <Link to={`/elearning1/${slug}`}>
      <div className="bg-[#4c37ee] flex flex-col items-start h-[379px] max-w-[263px] rounded-lg overflow-hidden shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300 ease-in-out">
        <img src={image} alt={title} className="w-full h-[216px] object-cover" />
        <div className="flex flex-col items-start h-full justify-between p-4">
          <h3 className=" font-semibold h-full text-lg mb-2 line-clamp-2">{title}</h3>
          <div className="flex flex-col gap-1 text-[#FFFFF0] text-sm">
            <span className="flex items-center gap-1">
              <img src="/public/assetsvivit/person_outline.svg" alt="Instructor" className="w-4 h-4" />
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
      </Link>
      
    );
  }

export default ContentCard