import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useLoaderData, useParams } from "react-router-dom";

const Details = () => {
  const data = useLoaderData();
  const { id } = useParams();
  const [details, setDetails] = useState({});
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  useEffect(() => {
    const single = data.find((service) => service.id === parseInt(id));
    setDetails(single);
  }, [data, id]);
  const { image, name, category, des, pricing, duration, counselor, rating } =
    details;

  const handleCommentSubmit = () => {
    if (newComment.trim()) {
      setComments([...comments, newComment.trim()]);
      setNewComment("");
    }
  };
  return (
    <div>
      <Helmet>
        <title>Details | Career Aspiro</title>
      </Helmet>
      <div className="hero bg-[#271470]">
        <div className="hero-content text-center">
          <div className="max-w-4xl py-20 ">
            <h1 className="text-4xl font-bold text-white mb-5">
              Service Details
            </h1>
            <p className=" text-white font-thin ">
              Empowering you with the tools, insights, and guidance to excel in
              your journey. Discover tailored programs and expert advice to
              achieve your personal and professional goals
            </p>
          </div>
        </div>
      </div>
      <div className="bg-blue-100">
        <div className="w-9/12 mx-auto py-14 px-5 mb-8 ">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <img
              src={image}
              alt={name}
              className="w-96 h-96  rounded-full shadow-lg"
            />
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold mb-4">{name}</h2>
              <p className="text-gray-600 mb-2">
                <strong>Category:</strong> {category}
              </p>
              <p className="text-gray-600 mb-2">
                <strong>Counselor:</strong> {counselor}
              </p>
              <p className="text-gray-600 mb-2">
                <strong>Duration:</strong> {duration}
              </p>
              <p className="text-gray-600 mb-2">
                <strong>Pricing:</strong> {pricing}
              </p>
              <p className="text-gray-600 mb-2">
                <strong>Rating:</strong> ⭐ {rating}
              </p>
              <p className="text-gray-700 mt-5">{des}</p>
            </div>
          </div>
        </div>
        <div className="w-9/12 mx-auto py-10 px-5 text-center border border-4 border-blue-900 rounded-lg ">
          <h3 className="text-2xl font-bold mb-4 text-blue-900">
            Comments & Feedback
          </h3>
          <div className="mb-6">
            <input
              type="text"
              className="input input-bordered w-full lg:w-1/2"
              placeholder="Write your comment here..."
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
            />
            <button
              className="btn bg-blue-600 text-white mt-4"
              onClick={handleCommentSubmit}
            >
              Submit
            </button>
          </div>

          {comments.length > 0 ? (
            <div className="space-y-4">
              {comments.map((comment, index) => (
                <div
                  key={index}
                  className="bg-gray-100 rounded-lg shadow-md p-4 text-gray-800"
                >
                  {comment}
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-500">
              No comments yet. Be the first to share your feedback!
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Details;
