import { useEffect, useState } from "react";
import api from "../services/api";
import ProductCard from "../components/productcard";
import image1 from "../assets/images/pic4.jpeg"
import image2 from "../assets/images/pic1.jpeg"
import image3 from "../assets/images/pic2.jpeg"

function Home() {

  const [products, setProducts] = useState([]);

  useEffect(() => {

    getProducts();

  }, []);

  const getProducts = async () => {

    try {

      const response = await api.get("products/");

      setProducts(response.data);

    } catch (error) {

      console.log(error);

    }

  };

  const deleteProduct = async (id) => {
    try {
      await api.delete(`products/${id}/`);
      setProducts((prev) => prev.filter((p) => p.id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  return (

    <div className="container mt-5">
      <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={image1} className="d-block w-100" alt="Image 1"/>
          </div>
          <div className="carousel-item">
            <img src={image2} className="d-block w-100" alt="Image 2"/>
          </div>
          <div className="carousel-item">
            <img src={image3} className="d-block w-100" alt="Image 3"/>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <h2 className="mb-3 mt-3">
        Available Products
      </h2>

      <div className="row">

        {products.map((product) => (

          <ProductCard
            key={product.id}
            product={product}
            onDelete={deleteProduct}
          />

        ))}

      </div>

    </div>

  );
}

export default Home;