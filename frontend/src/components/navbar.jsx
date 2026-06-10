import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">

      <div className="container">

        <Link
          className="navbar-brand fw-bold"
          to="/"
        >
          Product Store
        </Link>

        <div>

          <Link
            className="btn btn-light me-2"
            to="/"
          >
            Home
          </Link>

          <Link
            className="btn btn-warning"
            to="/add-product"
          >
            Add Product
          </Link>

        </div>

      </div>

    </nav>
  );
}

export default Navbar;