import { Link } from "react-router-dom";

const Card = ({ item }) => {
  const { product_title, product_image, price, product_id } = item || {};
  return (
    <div>
      <div className="card card-compact bg-base-100 border shadow-xl">
        <figure className="p-4">
          <img
            className="h-40 rounded-2xl"
            src={product_image}
            alt={product_title}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{product_title}</h2>
          <p>Price: ${price}</p>
          <div className="card-actions justify-start">
            <Link
              to={`/card/${product_id}`}
              className="btn btn-outline text-lg font-semibold rounded-full"
            >
              View Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
