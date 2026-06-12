import { Link } from "react-router-dom";

function ProductCard({ product, onDelete }) {
  const handleDelete = () => {
    if (!onDelete) return console.warn('onDelete not provided');
    if (window.confirm('Are you sure you want to delete this product?')) {
      onDelete(product.id);
    }
  };

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

        <div className="d-flex justify-content-between p-2">
          <Link
            to={`/edit-product/${product.id}`}
            className="btn btn-outline-primary"
          >
            Edit
          </Link>

          <button
            className="btn btn-outline-danger"
            onClick={handleDelete}
          >
            Delete
          </button>

        </div>

        <div>
          
        </div>

      </div>

    </div>
  );
}

export default ProductCard;