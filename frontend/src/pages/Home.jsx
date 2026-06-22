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
      <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={image1} class="d-block w-100" alt="Image 1"/>
          </div>
          <div class="carousel-item">
            <img src={image2} class="d-block w-100" alt="Image 2"/>
          </div>
          <div class="carousel-item">
            <img src={image3} class="d-block w-100" alt="Image 3"/>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
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