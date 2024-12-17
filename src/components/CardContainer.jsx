import { Link, useLoaderData } from "react-router-dom";
import { FaBookmark, FaShareAlt, FaStar, FaEye } from 'react-icons/fa';

const CardContainer = () => {
  const data = useLoaderData();
  const allNews = data.data;
  
  {if(allNews.length <= 0)return <p className="text-4xl font-bold text-red-700 my-6 text-center">No News Available</p>}
  return (
    <div className="flex flex-col gap-3">
      {allNews.map((news,index) => (
        <div key={index} className="card bg-base-100 shadow-xl p-4">
          {/* Author Container */}
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <img
                src={news.author.img}
                alt={news.author.name}
                className="w-12 h-12 rounded-full"
              />
              <div>
                <p className="text-lg font-semibold">{news.author.name}</p>
                <p className="text-sm text-gray-500">
                  {news.author.published_date}
                </p>
              </div>
            </div>
            <div className="flex space-x-4 text-xl">
              <FaBookmark className="cursor-pointer" />
              <FaShareAlt className="cursor-pointer" />
            </div>
          </div>

          {/* Title */}
          <h2 className="text-2xl font-bold mt-4">{news.title}</h2>

          {/* News Image */}
          <img
            src={news.image_url}
            alt={news.title}
            className="w-full h-64 object-cover object-center rounded-lg mt-4"
          />

          {/* Description */}
          <p className="mt-4 text-gray-700">
            {news.details.slice(0, 100)}...
            <Link to={`/category/${news.category_id}/${news._id}`} className="text-orange-500 hover:underline ml-2">
              Read more
            </Link>
          </p>

          {/* Bottom Container */}
          <div className="flex justify-between items-center mt-4">
            <div className="flex items-center text-yellow-500">
              <FaStar className="mr-2" />
              <span className="font-bold">{news.rating.number}</span>
              <span className="ml-2 text-sm text-gray-500">
                {news.rating.badge}
              </span>
            </div>
            <div className="flex items-center text-gray-500">
              <FaEye className="mr-2" />
              <span>{news.total_view} views</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardContainer;
