import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (

    <div className="col-md-4 mb-4">

      <div className="card shadow h-100">

        <img
          src={product.image}
          className="card-img-top"
          alt={product.name}
          height="250"
        />

        <div className="card-body">

          <h5>{product.name}</h5>

          <p>{product.description}</p>

          <h4 className="text-success">
            KES {product.price}
          </h4>

        </div>

        <div className="d-flex justify-content-between">
            <Link
                to={`/edit-product/${product.id}`}
                className="btn btn-outline-primary"
            >
                Edit
            </Link>

        </div>

      </div>

    </div>
  );
}

export default ProductCard;