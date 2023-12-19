import { useEffect, useState } from 'react';
import api from '../../api';
import { useSearchParams } from 'react-router-dom';

export default function AddProduct() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [products, setProducts] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(false);
  const [productAdded, setProductAdded] = useState({
    ProductId: 0,
    stock: 0,
    price: 0,
  });

  const fetch = async () => {
    try {
      const { data } = await api.get('/products');
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
    const token = searchParams.get('token');
    try {
      const { data } = await api.post('/seller-products', productAdded, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  function handleSubmit() {
    addProduct();
  }

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
        <select className="select select-bordered w-full max-w-xs">
          <option disabled>Pilih</option>
          <option>Choose product</option>
          <option>Buah</option>
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
                <li key={index} onClick={(e) => handleSelectedProduct(e, el)}>
                  <input type="radio" id={el.productName} name="hosting" defaultValue="hosting-small" className="hidden peer" required="" />
                  <label
                    htmlFor={el.productName}
                    className="inline-flex items-center justify-between w-full p-2 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer peer-checked:border-blue-primary peer-checked:text-blue-primary hover:text-gray-600 hover:bg-gray-100"
                  >
                    <div className="block">
                      <div className="mask rounded">
                        <img className="mask rounded aspect-square" src="https://images.unsplash.com/photo-1565685225009-fc85d9109c80" alt="Bawang Merah Image" />
                      </div>
                      <div className="w-full text-sm mt-3 mb-2 ">{el.productName}</div>
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
        <input type="number" placeholder="Type here" min="0" className="input input-bordered w-full max-w-xs" onChange={handleStock} />
      </label>

      <label className="form-control w-full max-w-xs mb-2">
        <div className="label">
          <span className="label-text">Harga</span>
        </div>
        <input type="number" placeholder="Type here" min="0" className="input input-bordered w-full max-w-xs" onChange={handlePrice} />
        <div className="label">
          <span className="label-text-alt">
            Kisaran harga: {selectedProduct && selectedProduct.HER} - {selectedProduct && selectedProduct.HET} / {selectedProduct && selectedProduct.unit}
          </span>
        </div>
      </label>
      <button className="btn bg-blue-primary text-white" onClick={handleSubmit}>
        Buat Produk
      </button>
    </section>
  );
}
