import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const Card = ({ item }) => {
  //console.log(item);
  const { id, image, name, category, pricing, counselor } = item;

  return (
    <div>
      <div className="card bg-[#eaf9f7] w-96 my-4 ">
        <figure className="px-5 pt-5 ">
          <img src={image} alt="Shoes" className="rounded-full h-48" />
        </figure>
        <div className="card-body py-3">
          <h2 className="card-title">{name}</h2>
          <p>Category: {category}</p>
          <p>Counselor: {counselor}</p>
          <p>Price: {pricing}</p>
          <div className="card-actions">
            <Link to={`/services/${id}`}>
              <button className="btn border-solid border-2 border-[#3b38e2] text-[#5238e2] rounded-full">
                Learn More
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
