import { useEffect, useState } from 'react';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import api from '../../api';

export default function EditProduct() {
  // eslint-disable-next-line no-unused-vars
  const [searchParams, setSearchParams] = useSearchParams();
  const { id } = useParams();
  const token = searchParams.get('token');
  const [product, setProduct] = useState({});
  const [edit, setEdit] = useState({
    stock: 0,
    price: 0,
  });
  const navigate = useNavigate();

  const fetch = async () => {
    try {
      const { data } = await api.get(`/seller-products/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setEdit({
        stock: data.stock,
        price: data.price,
      });

      setProduct(data);
    } catch (error) {
      console.log(error);
    }
  };

  function handleEdit({ key, e }) {
    setEdit({
      ...edit,
      [key]: e.target.value,
    });

    console.log(edit);
  }

  const editProduct = async () => {
    try {
      const { data } = await api.put(`/seller-products/${id}`, edit, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      navigate(`/seller/products?token=${token}`);
    } catch (error) {
      console.log(error);
    }
  };

  function handleSubmit() {
    editProduct();
  }

  useEffect(() => {
    fetch();
  }, []);

  return (
    <section id="add-product" className="p-8">
      <h1 className="text-xl font-bold mb-2">Edit Produk</h1>

      <label className="form-control w-full max-w-xs mb-2">
        <div className="label">
          <span className="label-text">Jumlah Stok</span>
        </div>
        <input type="number" placeholder="Type here" min="0" className="input input-bordered w-full max-w-xs" value={edit.stock} onChange={(e) => handleEdit({ key: 'stock', e })} />
      </label>

      <label className="form-control w-full max-w-xs mb-2">
        <div className="label">
          <span className="label-text">Harga</span>
        </div>
        <input type="number" placeholder="Type here" min="0" className="input input-bordered w-full max-w-xs" value={edit.price} onChange={(e) => handleEdit({ key: 'price', e })} />
        <div className="label">
          <span className="label-text-alt">
            Kisaran harga:${product?.product?.HER} - ${product?.product?.HET} / kg
          </span>
        </div>
      </label>
      <button className="btn bg-blue-primary text-white" onClick={handleSubmit}>
        Ubah Produk
      </button>
    </section>
  );
}
