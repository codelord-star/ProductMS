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
            className="btn btn-warning me-2"
            to="/add-product"
          >
            Add Product
          </Link>

          <Link
            className="btn btn-light"
            to="/login"
          >
            Login
          </Link>

        </div>

      </div>

    </nav>
  );
}

export default Navbar;