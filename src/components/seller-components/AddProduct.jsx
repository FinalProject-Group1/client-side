
import { useEffect, useState } from "react";
import api from "../../api";
import { useSearchParams } from "react-router-dom";
import Swal from "sweetalert2";

export default function AddProduct() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [products, setProducts] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");

  const [productAdded, setProductAdded] = useState({
    ProductId: 0,
    stock: 0,
    price: 0,
  });

  const navigate = useNavigate();


  const fetch = async () => {
    try {
      const { data } = await api.get("/products?category=" + selectedCategory);
      setProducts(data);

    } catch (error) {
      console.log(error);
    }
  };

  function handleSelectedProduct(e, el) {
    setSelectedProduct(el);
    setProductAdded({ ...productAdded, ProductId: el.id });
    console.log(productAdded);
  }

  function handleStock(e) {
    setProductAdded({ ...productAdded, stock: e.target.value });
    console.log(productAdded);
  }

  function handlePrice(e) {
    setProductAdded({ ...productAdded, price: e.target.value });
    console.log(productAdded);
  }

  const addProduct = async () => {

    const token = searchParams.get("token");
    try {
      const { data } = await api.post("/seller-products", productAdded, {

        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      navigate(`/seller/products?token=${token}`);
    } catch (error) {
      console.log(error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `${error.response.data.message}`,
      });

    }
  };

  function handleSubmit() {
    addProduct();
  }
  useEffect(() => {
    fetch();
  }, [selectedCategory]);

  useEffect(() => {
    fetch();
    console.log(selectedProduct);
  }, [selectedProduct]);

  return (
    <section id="add-product" className="p-8">
      <h1 className="text-xl font-bold mb-2">Tambah Produk</h1>
      <label className="form-control w-full max-w-xs">
        <div className="label">
          <span className="label-text">Kategori Produk</span>
        </div>

        <select
          className="select select-bordered w-full max-w-xs"
          onChange={(e) => setSelectedCategory(e.target.value)}>

          <option disabled selected>
            Pilih
          </option>
          <option value="sembako">Sembako</option>
          <option value="sayuran">Sayuran</option>
          <option value="buah">Buah-buahan</option>
          <option value="daging">Daging</option>
        </select>
      </label>

      <label className="form-control w-full mb-2">
        <div className="label">
          <span className="label-text">Pilih Produk</span>
        </div>

        <ul className="grid gap-4 grid-cols-2 lg:grid-cols-6 md:grid-cols-4 w-full">
          {products &&
            products.map((el, index) => {
              return (

                <li
                  className=""
                  key={index}
                  onClick={(e) => handleSelectedProduct(e, el)}>
                  <input
                    type="radio"
                    id={el.productName}
                    name="hosting"
                    defaultValue="hosting-small"
                    className="hidden peer"
                    required=""
                  />
                  <label
                    htmlFor={el.productName}
                    className="inline-flex items-center justify-between w-full h-full p-2 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer peer-checked:border-blue-primary peer-checked:text-blue-primary hover:text-gray-600 hover:bg-gray-100">
                    <div className="block w-full h-full">
                      <div className="mask rounded h-3/4 w-full">
                        <img
                          className="mask rounded w-full h-full aspect-square"
                          src={el.imageUrl}
                          alt="Bawang Merah Image"
                        />
                      </div>
                      <div className="flex flex-col justify-center h-1/4">
                        <div className="w-full text-sm mt-3 mb-2 text-center">
                          {el.productName}
                        </div>

                      </div>
                    </div>
                  </label>
                </li>
              );
            })}
        </ul>
      </label>

      <label className="form-control w-full max-w-xs mb-2">
        <div className="label">
          <span className="label-text">Jumlah Stok</span>
        </div>

        <input
          type="number"
          placeholder="Type here"
          min="0"
          className="input input-bordered w-full max-w-xs"
          onChange={handleStock}
        />

      </label>

      <label className="form-control w-full max-w-xs mb-2">
        <div className="label">
          <span className="label-text">Harga</span>
        </div>

        <input
          type="number"
          placeholder="Type here"
          min="0"
          className="input input-bordered w-full max-w-xs"
          onChange={handlePrice}
        />
        <div className="label">
          <span className="label-text-alt">
            Kisaran harga: {selectedProduct && selectedProduct.HER} -{" "}
            {selectedProduct && selectedProduct.HET} /{" "}
            {selectedProduct && selectedProduct.unit}

          </span>
        </div>
      </label>
      <button className="btn bg-blue-primary text-white" onClick={handleSubmit}>
        Buat Produk
      </button>
    </section>
  );
}
