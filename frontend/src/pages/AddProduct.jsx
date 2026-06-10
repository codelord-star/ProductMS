import { useState } from "react";
import api from "../services/api";
import { useNavigate } from "react-router-dom";

function AddProduct() {

  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);

  const saveProduct = async (e) => {

    e.preventDefault();

    const formData = new FormData();

    formData.append("name", name);
    formData.append("price", price);
    formData.append("description", description);
    formData.append("image", image);

    try {

      await api.post(
        "products/",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      alert("Product Added Successfully");

      navigate("/");

    } catch (error) {

      console.log(error);

    }

  };

  return (

    <div className="container mt-5">

      <div className="card shadow">

        <div className="card-body">

          <h2>Add Product</h2>

          <form onSubmit={saveProduct}>

            <input
              type="text"
              className="form-control mb-3"
              placeholder="Product Name"
              onChange={(e)=>setName(e.target.value)}
            />

            <input
              type="number"
              className="form-control mb-3"
              placeholder="Price"
              onChange={(e)=>setPrice(e.target.value)}
            />

            <textarea
              className="form-control mb-3"
              placeholder="Description"
              onChange={(e)=>setDescription(e.target.value)}
            />

            <input
              type="file"
              className="form-control mb-3"
              onChange={(e)=>
                setImage(e.target.files[0])
              }
            />

            <button
              className="btn btn-primary w-100"
            >
              Save Product
            </button>

          </form>

        </div>

      </div>

    </div>

  );
}

export default AddProduct;