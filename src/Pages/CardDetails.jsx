import React from "react";
import Header from "../components/Header";
import RightNav from "../components/layoutComponents/RightNav";
import { useLoaderData } from "react-router-dom";
import { Link } from "react-router-dom"; 
import { AiOutlineArrowLeft } from "react-icons/ai";

const CardDetails = () => {
  const data = useLoaderData();
  const news = data.data[0];
  return (
    <div>
      <Header />
      <div className="my-3 grid lg:grid-cols-12 gap-3 justify-items-center w-full p-4">
        <div className="col-span-9 w-full border-2">
          <h3 className="text-xl font-semibold">Dragon News</h3>
          <div className="card w-11/12 mx-auto shadow-xl my-6">
            {/* Top Image */}
            <figure>
              <img
                src={news.image_url}
                alt={news.title}
                className="w-full object-cover"
              />
            </figure>

            {/* Card Body */}
            <div className="card-body">
              {/* Title */}
              <h2 className="card-title text-2xl font-bold">{news.title}</h2>

              {/* Details */}
              <p className="mt-4 text-justify">{news.details}</p>

              {/* Button */}
              <div className="card-actions mt-4">
                <Link
                  to={`/category/${news.category_id}`}
                  className="btn bg-[#D72050] text-white hover:text-[#D72050] flex items-center gap-2"
                >
                  <AiOutlineArrowLeft />
                  All news in this category
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-3 border-2">
          <RightNav />
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
