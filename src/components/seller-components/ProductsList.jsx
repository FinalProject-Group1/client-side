import { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import api from '../../api';

export default function ProductList() {
  // eslint-disable-next-line no-unused-vars
  const [searchParams, setSearchParams] = useSearchParams();
  const token = searchParams.get('token');
  const [products, setProducts] = useState([]);

  const fetch = async () => {
    try {
      const { data } = await api.get('/users/seller-products', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(data);
      setProducts(data.products);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetch();
  }, []);

  return (
    <section id="products-list" className="p-8 mb-10">
      <h1 className="text-xl font-bold mb-2">Daftar Produk</h1>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Nama Produk</th>
              <th>Kategori</th>
              <th>Harga</th>
              <th>Jumlah Stok</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {products.map((el, index) => {
              return (
                <tr key={index}>
                  <td>
                    <div className="avatar">
                      <div className="mask rounded w-40 h-40">
                        <img src={el.product.imageUrl} alt="Bawang Merah Image" />
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="flex items-center gap-3">
                      <div>
                        <div className="font-bold">{el.product.productName}</div>
                      </div>
                    </div>
                  </td>
                  <td>{el.product.category}</td>
                  <td>{el.price}</td>
                  <td>{el.stock}</td>
                  <td>
                    <Link to={`/seller/products/${el.id}?token=${token}`}>
                      <button className="btn bg-yellow-primary btn-xs">Ubah</button>
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
}
